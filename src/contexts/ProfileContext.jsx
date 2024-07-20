import { useState } from 'react';
import { createContext } from 'react';

// import useAuth from '../hooks/useAuth';

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [profileUser, setProfileUser] = useState(null);

  // const { authUser } = useAuth();
  // console.log(authUser);

  return (
    <ProfileContext.Provider value={profileUser}>
      {children}
    </ProfileContext.Provider>
  );
}
