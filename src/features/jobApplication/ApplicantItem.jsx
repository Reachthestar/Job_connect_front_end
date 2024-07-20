import { useNavigate } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';

export default function ApplicantItem({ applicant }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center">
      <div className=" w-1/2 flex justify-start items-center">
        <Avatar />
        <div className="w-full ml-4 flex flex-col gap-3">
          <h5 className=" text-xl font-semibold">
            {applicant?.user.firstName} {applicant?.user.lastName}
          </h5>
          <p className="text-gray-500 text-sm font-semibold">
            Email: <span className="font-normal">{applicant?.user.email}</span>
          </p>
          <p className="text-gray-500 text-sm font-semibold">
            Tel: <span className="font-normal">{applicant?.user.phone}</span>
          </p>
          <p className="text-gray-500 text-sm font-semibold">
            Address:{' '}
            <span className="font-normal">
              {applicant?.user.province}, {applicant?.user.city}
            </span>
          </p>
        </div>
      </div>

      <div className="w-1/2 flex justify-end items-center">
        <div className=" flex justify-end items-center gap-10">
          <Button
            bg="white"
            color="purple"
            onClick={() => navigate(`/profile/${applicant.userId}`)}
          >
            See profile
          </Button>
        </div>
      </div>
    </div>
  );
}
