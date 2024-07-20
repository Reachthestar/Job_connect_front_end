import { Link } from 'react-router-dom';
import Button from '../components/Button';
import useAuth from '../hooks/useAuth';
// import Avatar from '../components/Avatar';
import Dropdown from '../layouts/Dropdown';

export default function Menu() {
  const { authUser } = useAuth();

  return (
    <>
      {authUser ? (
        <div className="flex items-center gap-5">
          {authUser.role === 'SEEKER' ? (
            <Link to="/jobApplication">
              <Button bg="white" color="purple">
                See your job application
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/job/createJob">
                <Button bg="purple" color="white">
                  Create new job
                </Button>
              </Link>
              <Link to="/job">
                <Button bg="white" color="purple">
                  See your posts
                </Button>
              </Link>
            </>
          )}

          <Dropdown />
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4">
          <Link to="/register">
            <Button bg="white" color="purple">
              Register
            </Button>
          </Link>

          <Link to="/login">
            <Button bg="purple" color="white">
              Login
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}
