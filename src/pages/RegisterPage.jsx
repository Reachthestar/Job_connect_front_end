import Button from '../components/Button';
import Form from '../components/Form';
import RegisterForm from '../features/authentication/components/RegisterForm';

export default function RegisterPage() {
  //   console.log(setIsLoginModal, setOpen);
  // const handleSubmit = () => {
  //   console.log('register successfully');
  //   setIsLoginModal(true);
  // };
  return (
    <>
      <Form title="Register">
        <RegisterForm />
      </Form>
    </>
  );
}
