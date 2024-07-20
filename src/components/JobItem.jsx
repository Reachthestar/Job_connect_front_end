import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Avatar from './Avatar';
import Button from './Button';
import Status from './Status';
import useJob from '../hooks/useJob';
import { useEffect } from 'react';
import { useState } from 'react';

export default function JobItem({ job }) {
  const [hasApplied, setHasApplied] = useState(false);
  const { authUser } = useAuth();
  const { applyJob, applications, fetchJobData, deleteJob, setJobs } = useJob();

  useEffect(() => {
    if (authUser && job) {
      const Applied = (applications || []).reduce(
        (acc, app) =>
          acc || (app.jobId === job.id && app.userId === authUser.id),
        false
      );
      setHasApplied(Applied);
    }
  }, []);

  const handleApply = () => {
    if (job?.id && authUser?.id) {
      applyJob(job.id, authUser.id);
      setHasApplied(true);
    } else {
      navigate('/login');
    }
  };

  const handleDeleteJob = (jobId) => {
    deleteJob(jobId);
    setJobs((prev) => prev?.filter((job) => job?.id !== jobId));
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
      <div className=" w-1/2 flex justify-start items-center">
        <Avatar />
        <div className="w-full ml-4">
          <h1 className="text-lg font-semibold">{job?.user.companyName}</h1>
          <h5 className="mb-3">{job?.title}</h5>
          <div className="w-full flex justify-between items-center text-[12px] text-slate-400">
            <Status type={job?.type} />
            <p>
              {job?.province}, {job?.city}
            </p>
            <p>
              {job?.salaryMin} &#3647; - {job?.salaryMax} &#3647;
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex justify-end items-center">
        <div className=" flex justify-end items-center gap-10">
          {authUser?.role === 'SEEKER' ? (
            <Button
              onClick={handleApply}
              disabled={hasApplied}
              bg={hasApplied ? 'gray' : 'purple'}
              color="white"
            >
              {hasApplied ? 'Applied' : 'Apply'}
            </Button>
          ) : (
            authUser?.id === job.userId && (
              <>
                <Button
                  bg="red"
                  color="white"
                  onClick={() => handleDeleteJob(job?.id)}
                >
                  Delete
                </Button>
                <Button
                  bg="purple"
                  color="white"
                  onClick={() =>
                    navigate(`/jobApplication/applicant/${job?.id}`)
                  }
                >
                  See applicants
                </Button>
              </>
            )
          )}

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
