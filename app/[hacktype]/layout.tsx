import { ReactNode } from "react";

const HacksLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section >
      {children}
    </section>
  );
};

export default HacksLayout;