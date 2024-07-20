import Form from '../components/Form';
import CreateJobForm from '../features/job/components/CreateJobForm';

export default function CreateJobPage() {
  return (
    <>
      <Form title="Create new job">
        <CreateJobForm />
      </Form>
    </>
  );
}
