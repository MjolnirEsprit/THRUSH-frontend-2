import { useWeb3 } from "@components/MusicCourses/providers";
import Link from "next/link";
import { ActiveLink, Button } from "@components/common";
import { useAccount } from "@components/MusicCourses/hooks/web3";
import { useRouter } from "next/router";
import NavLinks from "@components/common/navigation_links";

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3();
  const { account } = useAccount();
  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex flex-col items-center justify-between xs:flex-row">
            <div>
              <NavLinks />
            </div>
            <div className="text-center">
              <ActiveLink href="/courses-marketplace/wishlist">
                <a className="mr-1 font-medium text-gray-500 hover:text-gray-900 sm:mr-8">
                  Wishlist
                </a>
              </ActiveLink>
              {isLoading ? (
                <Button disabled={true} onClick={connect}>
                  Loading...
                </Button>
              ) : account.data ? (
                <Button hoverable={false} className="cursor-default">
                  Hi there {account.isAdmin && "Admin"}
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
      {account.data && !pathname.includes("/courses-marketplace/marketplace") && (
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="rounded-md bg-orange-600 p-2 text-white">
            {account.data}
          </div>
        </div>
      )}
    </section>
  );
}
