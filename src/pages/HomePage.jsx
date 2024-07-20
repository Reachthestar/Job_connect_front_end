import { useEffect } from 'react';
import Button from '../components/Button';
import JobContainer from '../features/job/components/JobContainer';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const { authUser } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (authUser?.role === 'SEEKER' && authUser?.jobTitle === null) {
      navigate('/profile/editProfile');
    }
    if (authUser?.role === 'COMPANY' && authUser?.companyName === null) {
      navigate('/profile/editProfile');
    }
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center w-full h-[450px] bg-hero-image bg-center bg-cover">
        <div className="flex flex-col gap-10">
          <h1 className="text-white font-semibold text-4xl">
            Join Us & Explore Thousands of jobs.
          </h1>

          <div className="flex justify-between items-center p-3 rounded-md bg-slate-50">
            <div className="text-gray-400">
              <div>Job Title</div>
            </div>
            <div className="text-gray-400">
              <p>City</p>
            </div>
            <Button bg="yellow">Find Jobs</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl py-7">Most Popular Jobs</h1>
        <div>
          <JobContainer />
        </div>
      </div>
    </div>
  );
}
