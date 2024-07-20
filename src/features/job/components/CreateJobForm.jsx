import { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import jobApi from '../../../apis/job';
import { useNavigate } from 'react-router-dom';
import useJob from '../../../hooks/useJob';
import useAuth from '../../../hooks/useAuth';

const initialInput = {
  title: '',
  position: '',
  type: '' || 'FULL_TIME',
  description: '',
  qualification: '',
  salaryMin: '',
  salaryMax: '',
  province: '',
  city: '',
};

export default function CreateJobForm() {
  const [input, setInput] = useState(initialInput);
  const { jobs } = useJob();
  const { authUSer } = useAuth();
  console.log(jobs);
  console.log(authUSer);

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      await jobApi.createJob(input);

      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-4">
        <div>
          <Input
            placeholder="Job Title :"
            value={input.title}
            name="title"
            onChange={handleChangeInput}
            // error={inputError.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Job Position :"
            value={input.position}
            name="position"
            onChange={handleChangeInput}
            // error={inputError.lastName}
          />
        </div>
        <div>
          <textarea
            placeholder="Job Description :"
            name="description"
            className="block w-full focus:outline-none resize-none border rounded-md"
            value={input.description}
            rows={5}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <div>
          <textarea
            placeholder="Job Qualification :"
            name="qualification"
            className="block w-full focus:outline-none resize-none border rounded-md"
            value={input.qualification}
            rows={5}
            onChange={handleChangeInput}
          ></textarea>
        </div>
        <div>
          <Input
            placeholder="Minimum Salary :"
            value={input.salaryMin}
            name="salaryMin"
            onChange={handleChangeInput}
            // error={inputError.emailOrMobile}
          />
        </div>
        <div>
          <Input
            placeholder="Maximum salary :"
            value={input.salaryMax}
            name="salaryMax"
            onChange={handleChangeInput}
            // error={inputError.password}
          />
        </div>
        <div>
          <Input
            placeholder="Province :"
            value={input.province}
            name="province"
            onChange={handleChangeInput}
            // error={inputError.confirmPassword}
          />
        </div>
        <div>
          <Input
            placeholder="City :"
            value={input.city}
            name="city"
            onChange={handleChangeInput}
            // error={inputError.confirmPassword}
          />
        </div>
        {/* <div className="">
          <Input
            placeholder="Due Date :"
            value={input.province}
            name="dueDate"
            onChange={handleChangeInput}
            // error={inputError.confirmPassword}
          />
        </div> */}
        <div className="text-gray-400">
          <select
            className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:border-blue-500 focus:ring-blue-300"
            name="type"
            value={input.type}
            onChange={handleChangeInput}
          >
            <option value="FULL_TIME">Full Time</option>
            <option value="PART_TIME">Part Time</option>
          </select>
        </div>
        <div className="text-center">
          <Button width="full">Create</Button>
        </div>
      </div>
    </form>
  );
}
