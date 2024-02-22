import { useState, useEffect } from 'react';

const getWindowResize = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
};

export const useWindowResize = () => {
  const [windowResize, setWindowResize] = useState(getWindowResize());

  useEffect(() => {
    const handleResize = () => {
      setWindowResize(getWindowResize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowResize;
};
