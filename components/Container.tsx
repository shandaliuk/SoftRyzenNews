import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container mx-auto w-80 px-2 sm:px-8 sm:w-[480px] md:w-[768px] xl:w-[1280px]">
      {children}
    </div>
  );
};

export default Container;
