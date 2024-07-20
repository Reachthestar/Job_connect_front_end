import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import { lazy } from 'react';
import MainContainer from '../layouts/MainContainer';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import JobPage from '../pages/JobPage';
import CreateJobPage from '../pages/CreateJobPage';
import JobApplicationPage from '../pages/JobApplicationPage';
import ProfilePage from '../pages/ProfilePage';
import ProtectedRoute from '../features/authentication/components/ProtectedRoute';
import EditProfilePage from '../pages/EditProfilePage';
import CreateExperiencePage from '../pages/CreateExperiencePage';
import MyJobPost from '../pages/MyJobPost';
import ApplicantPage from '../pages/ApplicantPage.jsx';
import ApplicantProfilePage from '../pages/ApplicantProfilePage';

// const MainContainer = lazy(() => import('../layouts/MainContainer'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainContainer />,
    children: [
      { path: '/', element: <HomePage /> },
      {
        path: 'register',
        element: <RegisterPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'job',
        element: (
          <ProtectedRoute>
            <MyJobPost />
          </ProtectedRoute>
        ),
      },
      {
        path: 'job/:jobId',
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job/createJob',
        element: (
          <ProtectedRoute>
            <CreateJobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'jobApplication',
        element: (
          <ProtectedRoute>
            <JobApplicationPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/jobApplication/applicant/:jobId',
        element: (
          <ProtectedRoute>
            <ApplicantPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile/:userId',
        element: (
          <ProtectedRoute>
            <ApplicantProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile/editProfile',
        element: (
          <ProtectedRoute>
            <EditProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'experience',
        element: (
          <ProtectedRoute>
            <CreateExperiencePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
