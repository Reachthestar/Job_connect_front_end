import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import experienceService from '../../../apis/experience';
import useAuth from '../../../hooks/useAuth';

const initialInput = {
  title: '' || 'WORK',
  name: '',
  description: '',
  startYear: '',
  endYear: '',
};

export default function ExperienceForm() {
  const [input, setInput] = useState(initialInput);

  const { authUser, setAuthUser } = useAuth();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      await experienceService.createExperience(input);

      const jobExperiences = [...authUser.Experience, input];

      setAuthUser({ ...authUser, Experience: jobExperiences });

      navigate('/');

      toast.success('your education or work experience created');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-4">
        <div className="col-span-2 text-gray-400 flex flex-col gap-3">
          <label htmlFor="title-select" className="text-gray-400">
            Please select Education or Work experience below :
          </label>
          <select
            className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:border-blue-500 focus:ring-blue-300"
            name="title"
            id="title-select"
            value={input.title}
            onChange={handleChangeInput}
          >
            <option value="WORK">Work experience</option>
            <option value="EDUCATION">Education experience</option>
          </select>
        </div>
        <div>
          <Input
            placeholder="Company or University Name"
            value={input.name}
            name="name"
            onChange={handleChangeInput}
            // error={inputError.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Job Title or Major Subject"
            value={input.description}
            name="description"
            onChange={handleChangeInput}
            // error={inputError.lastName}
          />
        </div>
        <div>
          <Input
            placeholder="Year of start"
            value={input.startYear}
            name="startYear"
            onChange={handleChangeInput}
            // error={inputError.emailOrMobile}
          />
        </div>
        <div>
          <Input
            placeholder="Year of end"
            value={input.endYear}
            name="endYear"
            onChange={handleChangeInput}
            // error={inputError.password}
          />
        </div>

        <div className="text-center">
          <Button width="full">Submit</Button>
        </div>
      </div>
    </form>
  );
}
