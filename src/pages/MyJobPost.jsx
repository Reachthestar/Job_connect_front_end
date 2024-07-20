import { useEffect } from 'react';
import Button from '../components/Button';
import JobItem from '../components/JobItem';
import useAuth from '../hooks/useAuth';
import useJob from '../hooks/useJob';

export default function MyJobPost() {
  const { authUser } = useAuth();
  const { jobs } = useJob();

  const myJobs = jobs?.filter((job) => job?.userId === authUser?.id);

  return (
    <>
      {myJobs?.length ? (
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-2xl">Your Posts</h1>
          {myJobs?.map((job) => (
            <div
              key={job.id}
              className="w-[1300px] p-3 bg-slate-50 shadow rounded-md my-4"
            >
              <JobItem job={job} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-2xl">No post!</h1>
        </div>
      )}
    </>
  );
}
