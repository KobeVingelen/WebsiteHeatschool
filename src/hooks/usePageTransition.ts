import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = (setIsLoading: (loading: boolean) => void) => {
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
  }, [location.pathname, setIsLoading]);
};