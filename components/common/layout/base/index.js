import { Web3Provider } from "@components/MusicCourses/providers";
import { Navbar, Footer, MainNavbar } from "@components/common";


export default function BaseLayout({ children }) {


  return (
    <div>
        <Web3Provider>
          <div>
            <MainNavbar />
            <div className="fit">{children}</div>
            <Footer />
          </div>
        </Web3Provider>
    </div>
  );
}
