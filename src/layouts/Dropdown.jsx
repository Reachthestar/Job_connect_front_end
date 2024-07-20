import Avatar from '../components/Avatar';
import { Link } from 'react-router-dom';
// import { RightFromBracketIcon } from '../icons';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const { logout, authUser } = useAuth();
  const navigate = useNavigate();

  const handleClickLogout = () => {
    setOpen(false);
    logout();
    navigate('/login');
    window.location.reload();
  };

  return (
    <div className="relative">
      <div role="button" onClick={() => setOpen((prev) => !prev)}>
        <Avatar src={authUser?.profileImage} />
      </div>
      {open && (
        <div className="absolute right-0 translate-y-1.5">
          <div className="p-2 w-96 h-96 rounded-lg shadow-[0_0_6px_rgb(0,0,0,0.2)] bg-white">
            {authUser?.role === 'SEEKER' ? (
              <Link to={`/profile`} onClick={() => setOpen(false)}>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                  <Avatar src={authUser?.profileImage} size={3.75} />
                  <div className="flex flex-col">
                    <h2 className="font-semibold">
                      {authUser?.firstName} {authUser?.lastName}
                    </h2>
                    <small className="text-gray-500">See your profile</small>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={`/job`} onClick={() => setOpen(false)}>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
                  <Avatar src={authUser?.profileImage} size={3.75} />
                  <div className="flex flex-col">
                    <h2 className="font-semibold">
                      {authUser?.firstName} {authUser?.lastName}
                    </h2>
                    <small className="text-gray-500">See your posts</small>
                  </div>
                </div>
              </Link>
            )}

            <hr className="my-2 border border-gray-300" />
            <Link to="/profile/editProfile">
              <div
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
                role="button"
              >
                <div className="text-sm">
                  Edit your {authUser?.role === 'COMPANY' ? 'company' : ''}{' '}
                  profile
                </div>
              </div>
            </Link>

            {authUser?.role === 'SEEKER' && (
              <Link to="/experience">
                <div
                  className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
                  role="button"
                  // onClick={handleClickLogout}
                >
                  <div className="text-sm ">
                    Add your education or work experience
                  </div>
                </div>
              </Link>
            )}

            <div
              className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
              role="button"
              onClick={handleClickLogout}
            >
              <div className="text-sm font-semibold">Log out</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
