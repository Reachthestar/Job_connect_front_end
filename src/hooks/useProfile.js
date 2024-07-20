import { useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';

export default function useAuth() {
  return useContext(ProfileContext);
}
