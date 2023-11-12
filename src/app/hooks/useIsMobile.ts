import { useState, useLayoutEffect } from 'react';

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(window?.innerWidth <= 768);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
}

export default useIsMobile;