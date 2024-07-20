import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useAuth from '../../../hooks/useAuth';
import { useEffect } from 'react';
import userApi from '../../../apis/user';

export default function EditProfileForm() {
  const [input, setInput] = useState(null);

  const { authUser, setAuthUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (authUser?.role === 'SEEKER') {
      setInput({
        firstName: authUser?.firstName,
        lastName: authUser?.lastName,
        phone: authUser?.phone,
        jobTitle: authUser?.jobTitle,
        province: authUser?.province,
        city: authUser?.city,
      });

      if (authUser?.role === 'COMPANY') {
        setInput({
          companyName: authUser?.companyName,
          companyDescription: authUser?.companyDescription,
        });
      }
    }
  }, [authUser]);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await userApi.updateUserProfile(input);
      // console.log(Boolean(!authUser.Experience.length));
      // console.log(authUser.Experience);

      setAuthUser({ ...authUser, ...input });

      if (authUser?.role === 'SEEKER' && !authUser?.Experience.length) {
        navigate('/experience');
      }
      if (authUser?.role === 'COMPANY') {
        navigate('/');
      }
      toast.success('your profile updated');
    } catch (err) {
      console.log(err);
    }
  };

  if (authUser?.role === 'SEEKER') {
    return (
      <form onSubmit={handleSubmitForm}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="First name"
              value={input?.firstName}
              name="firstName"
              onChange={handleChangeInput}
              // error={inputError.firstName}
            />
          </div>
          <div>
            <Input
              placeholder="Last name"
              value={input?.lastName}
              name="lastName"
              onChange={handleChangeInput}
              // error={inputError.lastName}
            />
          </div>
          <div className="col-span-2">
            <Input
              placeholder="Phone number"
              value={input?.phone}
              name="phone"
              onChange={handleChangeInput}
              // error={inputError.emailOrMobile}
            />
          </div>
          <div className="col-span-2">
            <Input
              placeholder="Job Title"
              value={input?.jobTitle}
              name="jobTitle"
              onChange={handleChangeInput}
              // error={inputError.password}
            />
          </div>
          <div className="col-span-2">
            <Input
              placeholder="Province"
              value={input?.province}
              name="province"
              onChange={handleChangeInput}
              // error={inputError.confirmPassword}
            />
          </div>
          <div className="col-span-2">
            <Input
              placeholder="City"
              value={input?.city}
              name="city"
              onChange={handleChangeInput}
              // error={inputError.confirmPassword}
            />
          </div>
          <div className="col-span-2 text-center">
            <Button width="full">Submit</Button>
          </div>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="flex flex-col gap-4">
        <div>
          <Input
            placeholder="Company Name"
            value={input?.companyName}
            name="companyName"
            onChange={handleChangeInput}
            // error={inputError.emailOrMobile}
          />
        </div>
        <div>
          <textarea
            placeholder="Company Description"
            name="companyDescription"
            className="block w-full focus:outline-none resize-none border rounded-md"
            value={input?.companyDescription}
            rows={5}
            onChange={handleChangeInput}
          ></textarea>
        </div>

        <div className="col-span-2 text-center">
          <Button width="full">Submit</Button>
        </div>
      </div>
    </form>
  );
}
