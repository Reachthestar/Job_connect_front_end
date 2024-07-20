import { createContext } from 'react';
import authApi from '../apis/auth';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../utils/local-storage';
import { useState } from 'react';
import { useEffect } from 'react';
import userApi from '../apis/user';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [isAuthUserLoading, setIsAuthUserLoading] = useState(true);

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (getAccessToken()) {
          const res = await authApi.getAuthUser();
          setAuthUser(res.data.user);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsAuthUserLoading(false);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (getAccessToken()) {
      const fetchUserProfile = async () => {
        const profile = await userApi.getUserProfile();
        setUserProfile(profile?.data);
      };
      fetchUserProfile();
    }
  }, []);

  const login = async (credentials) => {
    try {
      const res = await authApi.login(credentials);

      setAccessToken(res.data.accessToken);

      const getAuthUser = await authApi.getAuthUser();
      setAuthUser(getAuthUser.data.user);
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        authUser,
        isAuthUserLoading,
        setAuthUser,
        userProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
