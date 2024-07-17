import React from "react";
import Header from "./header";
type propsType = {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
};
const MainLayout = ({
  children,
  showHeader = true,
  showFooter = true,
  className,
}: propsType) => {
  return (
    <main className={`${className} relative bg-bg-color`}>
      {showHeader && <Header />}
      {children}
    </main>
  );
};

export default MainLayout;
