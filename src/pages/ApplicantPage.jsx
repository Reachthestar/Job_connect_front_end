import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobApplicationApi from '../apis/jobApplication';
import { useState } from 'react';
import ApplicantItem from '../features/jobApplication/ApplicantItem';

export default function ApplicantPage() {
  const [applicants, setApplicants] = useState([]);
  const { jobId } = useParams();

  const fetchApplicantsData = async (jobId) => {
    try {
      const result = await jobApplicationApi.getJobAndApplicantByJobId(jobId);
      setApplicants(result.data.Application);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApplicantsData(jobId);
  }, []);

  return (
    <>
      {applicants.length ? (
        <div className="flex flex-col justify-center items-center">
          {applicants?.map((applicant) => (
            <div
              key={applicant?.id}
              className="w-[1300px] p-3 bg-slate-50 shadow rounded-md my-4"
            >
              <ApplicantItem applicant={applicant} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-2xl">No applicant!</h1>
        </div>
      )}
    </>
  );
}
