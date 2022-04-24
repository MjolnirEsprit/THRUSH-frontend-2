import { useRouter } from "next/router";
import NavLinks from "../navigation_links";


export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <div className="flex bg-black">
      <NavLinks/>
    </div>
  );
}
