import { useRouter } from "next/router";
import NavLinks from "../navigation_links";

export default function Navbar() {
  const { pathname } = useRouter();

  return (
      <div className="bg-black px-[0.2rem] py-[0.8rem] flex">
          <NavLinks />
      </div>
  );
}
