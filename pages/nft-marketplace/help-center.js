import * as React from 'react';
import HelpBanner from './HelpBanner';
import HelpItem from './HelpItem';
import Footer from "@components/common/footer";

const HelpCenter = () => {
  return (
    <>
    <div>
      <HelpBanner/>
      <HelpItem/>
    </div>
    <div class="footer">
      <Footer />
    </div>
    </>
  );
}
export default HelpCenter;