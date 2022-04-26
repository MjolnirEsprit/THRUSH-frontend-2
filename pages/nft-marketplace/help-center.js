import * as React from 'react';
import HelpItem from './HelpItem';
import Footer from "@components/common/footer";
import {MainNavbar } from "@components/common";

const HelpCenter = () => {
  return (
    <>
    <div>
      <MainNavbar/>
      <HelpItem/>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  );
}
export default HelpCenter;