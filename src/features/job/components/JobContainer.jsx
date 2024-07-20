import JobItem from '../../../components/JobItem';
import useJob from '../../../hooks/useJob';

export default function JobContainer() {
  const { jobs } = useJob();

  return (
    <>
      {jobs?.map((job) => (
        <div
          key={job?.id}
          className="w-[1300px] p-3 bg-slate-50 shadow rounded-md my-4"
        >
          <JobItem job={job} />
        </div>
      ))}
    </>
  );
}
