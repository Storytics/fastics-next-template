import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <h1>Fastics - Main layout</h1>
      {children}
    </div>
  );
};

export default MainLayout;
