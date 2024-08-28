import React from "react";
import Header from "./navBar";
import Footer from "./footer";
import ContactInfo from "./contactInfo";

type propsType = {
  children: React.ReactNode;
  showHeader?: boolean;
  showContactInfo?: boolean;
  showFooter?: boolean;
};

const MainLayout = ({
  children,
  showHeader = true,
  showContactInfo = true,
  showFooter = true,
}: propsType) => {
  return (
    <main className="relative bg-white overflow-hidden font-kumbh">
      {showHeader && <Header />}
      <div className="relative z-10">{children}</div>
      {showContactInfo && <ContactInfo />}
      {showFooter && <Footer />}
    </main>
  );
};

export default MainLayout;
