import { useParams } from 'react-router-dom';
import useJob from '../hooks/useJob';

export default function JobPage() {
  const { jobId } = useParams();
  const { jobs } = useJob();

  const job = jobs.filter((job) => job.id === +jobId)[0];

  return (
    <div className="flex justify-center py-10">
      <div className="w-[1300px] h-screen flex flex-col items-center gap-20 bg-white rounded-md p-10">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold">{job?.user.companyName}</h1>
          <p className="text-lg">{job?.title}</p>
          <p className="text-sm">{job?.type}</p>
        </div>

        <div className="flex flex-col gap-20">
          <div>
            <h3 className="text-lg font-semibold">Job Description :</h3>
            <p>{job?.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Job Qualification :</h3>
            <p>{job?.qualification}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
