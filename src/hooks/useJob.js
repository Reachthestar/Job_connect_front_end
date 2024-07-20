import { useContext } from 'react';
import { JobContext } from '../contexts/JobContext';

export default function useJob() {
  return useContext(JobContext);
}
