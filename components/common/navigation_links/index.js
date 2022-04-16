import { useRouter } from "next/router";
import { ActiveLink } from "@components/common";
import Image from "next/image";
import thrushLogo from "@public/assets/thrushLogo.png";
import { signOut, useSession } from "next-auth/react";
import { LogoutIcon } from "@heroicons/react/outline";
import { userService } from 'services';

const style = {
  logoContainer: `flex items-center cursor-pointer mr-12`,
  logoText: ` ml-[0.8rem] text-[#FD7F2C] font-semibold text-2xl`,
  headerItems: ` flex items-center justify-end flex items-center justify-center space-x-12`,
  headerItem: `text-white px-4 space-x-8 font-bold text-white hover:text-[#8a939b] cursor-pointer`,
};


export default function NavLinks() {
  const { pathname } = useRouter();

  function logout() {
    userService.logout();
  }

  return (
    <>
      <ActiveLink href="/">
        <div className={style.logoContainer}>
          <Image src={thrushLogo} height={40} width={40} />
          <div className={style.logoText}>THRUSH</div>
        </div>
      </ActiveLink>
      <div className={style.headerItems}>
        <ActiveLink href="/courses-marketplace">
          <a className={style.headerItem}>Music Course Marketplace</a>
        </ActiveLink>
        <ActiveLink href="/instruments">
          <a className={style.headerItem}>Instruments Marketplace</a>
        </ActiveLink>
        <ActiveLink href="/fan-space">
          <a className={style.headerItem}>Fan Space</a>
        </ActiveLink>
        <ActiveLink href="/music-streaming">
          <a className={style.headerItem}>Music Streaming</a>
        </ActiveLink>
        <ActiveLink href="/nft-marketplace">
          <a className={style.headerItem}>NFT Marketplace</a>
        </ActiveLink>

        <button className={style.headerItem} onClick={() => signOut({ redirect: false })}>
          <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
          Unlink your spotify
        </button>

        <button className={style.headerItem} onClick={logout}>
          <LogoutIcon className="mr-2 h-5 w-5" aria-hidden="true" />
          Log out
        </button>
        {/*
      <ActiveLink href="/nft-marketplace">
          <a className={style.headerItem}>
          Karaoke
          </a>
        </ActiveLink>
        */}
      </div>
    </>
  );
}
