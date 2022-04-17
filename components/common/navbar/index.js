import { useWeb3 } from "@components/MusicCourses/providers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount } from "@components/MusicCourses/hooks/web3";
import { ActiveLink, Button } from "@components/common";
import NavLinks from "../navigation_links";

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3();
  const { account } = useAccount();
  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative  px-4 pt-6 sm:px-6 lg:px-8 ">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-col items-center justify-between xs:flex-row">
            <NavLinks />

            <div className="text-center">
            <ActiveLink href="/wishlist">
              <a className="mr-1 font-medium text-white hover:text-gray-900 sm:mr-8">
                Wishlist
              </a>
            </ActiveLink>
              {isLoading ? (
                <Button disabled={true} onClick={connect}>
                  Loading...
                </Button>
              ) : account.data ? (
                <Button hoverable={false} className="cursor-default">
                  Hi there {account.isAdmin && "Big guy"}
                </Button>
              ) : requireInstall ? (
                <Button
                  onClick={() =>
                    window.open("https://metamask.io/download.html", "_blank")
                  }
                >
                  Install Metamask
                </Button>
              ) : (
                <Button onClick={connect}>Connect</Button>
              )}
            </div>
          </div>
        </nav>
      </div>
      {account.data && !pathname.includes("/marketplace") && (
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="rounded-md bg-orange-600 p-2 text-white">
            {account.data}
          </div>
        </div>
      )}
    </section>
  );
}
