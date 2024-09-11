import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MobileContextType {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export const MobileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <MobileContext.Provider value={{ isMobile }}>{children}</MobileContext.Provider>;
};

export const useMobile = (): MobileContextType => {
  const context = useContext(MobileContext);
  if (context === undefined) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};
