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
      <ActiveLink href="/courses-marketplace">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Exclusive Course Marketplace
        </a>
      </ActiveLink>
      <ActiveLink href="/instruments">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Store
        </a>
      </ActiveLink>
      <ActiveLink href="/fan-space">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Fan Space
        </a>
      </ActiveLink>
      <ActiveLink href="/music-streaming">
        <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
          Music Streaming
        </a>
      </ActiveLink>
        <ActiveLink href="/nft-marketplace">
            <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                NFT Marketplace
            </a>
        </ActiveLink>
    </section>
  );
}
