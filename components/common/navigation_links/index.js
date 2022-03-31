import { useRouter } from "next/router";
import { ActiveLink } from "@components/common";

export default function NavLinks() {
  const { pathname } = useRouter();

  return (
    <section>
      <ActiveLink href="/">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Home
        </a>
      </ActiveLink>
      <ActiveLink href="/marketplace">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Marketplace
        </a>
      </ActiveLink>
      <ActiveLink href="/blogs">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Blogs
        </a>
      </ActiveLink>
      <ActiveLink href="/instruments">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Store
        </a>
      </ActiveLink>
    </section>
  );
}
