import { useState } from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import validateLogin from '../validator/validate-login';
import { AxiosError } from 'axios';

const initialInput = {
  email: '',
  password: '',
};

const initialInputError = {
  email: '',
  password: '',
};

function LoginForm() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validateLogin(input);

      if (error) {
        return setInputError(error);
      }

      setInputError({ initialInputError });

      await login(input);

      navigate('/');
      toast.success('login successfully');
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response.status === 400) {
          const message =
            err.response.status === 400
              ? 'invalid email'
              : 'internal server error';
          return toast.error(message);
        }
      }
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="grid grid-cols-2 gap-4">
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

        <div className="col-span-2 text-center">
          <Button width="full">Login</Button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
