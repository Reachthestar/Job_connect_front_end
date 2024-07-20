import AuthContextProvider from './contexts/AuthContext';
import JobContextProvider from './contexts/JobContext';
import Router from './route/index';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <JobContextProvider>
      <AuthContextProvider>
        <Router />
        <ToastContainer position="bottom-right" autoClose={3000} />
      </AuthContextProvider>
    </JobContextProvider>
  );
}

export default App;
