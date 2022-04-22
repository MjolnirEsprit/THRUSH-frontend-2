import * as React from 'react';
import Navbar from "@components/common/main_navbar";
import HelpItem from './HelpItem';
import Footer from "@components/common/footer";

const HelpCenter = () => {
  return (
    <>
    <div>
      <Navbar/>
      <HelpItem/>
    </div>
    <div class="footer">
      <Footer />
    </div>
    </>
  );
}
export default HelpCenter;