import { useRouter } from "next/router";
import NavLinks from "../navigation_links";


export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <div className="flex z-50 absolute bg-black">
      <NavLinks>
      </NavLinks>
    </div>
  );
}
