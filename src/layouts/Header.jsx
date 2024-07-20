import { Link } from 'react-router-dom';
import Menu from './Menu';
// import Button from '../components/Button';

export default function Header() {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-purple w-full h-[56px] flex justify-center items-center">
        <div className="w-[1300px] flex justify-between items-center">
          <Link to="/" className="text-white font-semibold text-2xl">
            Job Connect
          </Link>
          <Menu />
        </div>
      </header>
    </>
  );
}
