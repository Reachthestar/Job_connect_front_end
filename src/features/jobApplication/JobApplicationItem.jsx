import Avatar from '../../components/Avatar';
import Status from '../../components/Status';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export default function JobApplicationItem({ job, handleDeleteApplication }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center">
      <div className=" w-1/2 flex justify-start items-center">
        <Avatar />
        <div className="w-full ml-4">
          <h5 className="mb-3 text-md">{job?.job.title}</h5>
          <div className="w-full flex justify-between items-center text-[12px] text-slate-400">
            <Status type={job?.job.type} />
            <p>
              {job?.job.province}, {job?.job.city}
            </p>
            <p>
              {job?.job.salaryMin} - {job?.job.salaryMax}
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-end items-center">
        <div className=" flex justify-end items-center gap-10">
          <Button
            bg="red"
            color="white"
            onClick={() => handleDeleteApplication(job?.id)}
          >
            Cancel
          </Button>
          <Button
            bg="white"
            color="purple"
            onClick={() => navigate(`/job/${job?.id}`)}
          >
            See detail
          </Button>
        </div>
      </div>
    </div>
  );
}
