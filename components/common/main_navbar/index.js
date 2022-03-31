import { useRouter } from "next/router";
import { ActiveLink } from "@components/common";
import NavLinks from "../navigation_links";

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex items-center justify-between">
            <div>
              <NavLinks/>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
