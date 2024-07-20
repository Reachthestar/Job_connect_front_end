import { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import authApi from '../../../apis/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import validateRegister from '../validator/validate-register';
import { AxiosError } from 'axios';

const initialInput = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  isActive: true,
};

const initialInputError = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: '',
  isActive: true,
};

export default function RegisterForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInput });

      delete input.confirmPassword;

      await authApi.register(input);

      navigate('/login');
      toast.success('registered successfully, please log in to continue');
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response.data.field === 'email')
          setInputError((prev) => ({
            ...prev,
            email: 'email already in use',
          }));
      }
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Input
            placeholder="First name"
            value={input.firstName}
            name="firstName"
            onChange={handleChangeInput}
            error={inputError.firstName}
          />
        </div>
        <div>
          <Input
            placeholder="Last name"
            value={input.lastName}
            name="lastName"
            onChange={handleChangeInput}
            error={inputError.lastName}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Email address "
            type="email"
            value={input.email}
            name="email"
            onChange={handleChangeInput}
            error={inputError.email}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Password"
            type="password"
            value={input.password}
            name="password"
            onChange={handleChangeInput}
            error={inputError.password}
          />
        </div>
        <div className="col-span-2">
          <Input
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            name="confirmPassword"
            onChange={handleChangeInput}
            error={inputError.confirmPassword}
          />
        </div>
        <div className="col-span-2 text-gray-400">
          <label htmlFor="role-select" className="text-gray-400">
            Your purpose :
          </label>
          <select
            className="w-full px-3 py-1.5 border rounded-md focus:outline-none focus:ring-2 border-gray-300 focus:border-blue-500 focus:ring-blue-300"
            name="role"
            id="role-select"
            value={input.role}
            onChange={handleChangeInput}
          >
            <option value="SEEKER">Finding a job</option>
            <option value="COMPANY">Finding an employee</option>
          </select>

          {inputError.role ? (
            <small className="text-red">{inputError.role}</small>
          ) : null}
        </div>
        <div className="col-span-2 text-center">
          <Button width="full">Sign up</Button>
        </div>
      </div>
    </form>
  );
}
