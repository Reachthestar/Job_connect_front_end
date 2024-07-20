import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function MainContainer() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
