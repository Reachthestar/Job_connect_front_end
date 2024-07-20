import { useEffect } from 'react';
import JobApplicationItem from '../features/jobApplication/JobApplicationItem';
import { toast } from 'react-toastify';
import useJob from '../hooks/useJob';

export default function JobApplicationPage() {
  const {
    fetchJobApplicationData,
    deleteApplication,
    applications,
    setApplications,
  } = useJob();

  const handleDeleteApplication = async (applicationId) => {
    try {
      await deleteApplication(applicationId);
      setApplications((prev) =>
        prev.filter((job) => job?.id !== applicationId)
      );

      toast.success('your application is cancelled');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchJobApplicationData();
  }, []);
  return (
    <>
      {applications.length ? (
        <div className="flex flex-col justify-center items-center">
          {applications?.map((job) => {
            return (
              <div
                key={job?.id}
                className="w-[1300px] p-3 bg-slate-50 shadow rounded-md my-4"
              >
                <JobApplicationItem
                  job={job}
                  handleDeleteApplication={handleDeleteApplication}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-2xl">No job application</h1>
        </div>
      )}
    </>
  );
}
