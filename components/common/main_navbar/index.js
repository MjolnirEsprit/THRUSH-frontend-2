import { useRouter } from "next/router";
import NavLinks from "../navigation_links";


export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative mx-20 px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-col items-center justify-between xs:flex-row">
            <div>
              <NavLinks />
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
