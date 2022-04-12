import { useRouter } from "next/router";
import { ActiveLink } from "@components/common";
import Image from "next/image";
import thrushLogo from '@public/assets/thrushLogo.png'

const style = {
  logoContainer: `flex items-center cursor-pointer mr-12`,
  logoText: ` ml-[0.8rem] text-[#FD7F2C] font-semibold text-2xl`,
  headerItems: ` flex items-center justify-end flex items-center justify-center space-x-12`,
  headerItem: `text-white px-4 space-x-8 font-bold text-white hover:text-[#8a939b] cursor-pointer`
}

export default function NavLinks() {
  const { pathname } = useRouter();

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
          <a className={style.headerItem}>
            Exclusive Course Marketplace
          </a>
        </ActiveLink>
        <ActiveLink href="/instruments">
          <a className={style.headerItem}>
            Store
          </a>
        </ActiveLink>
        <ActiveLink href="/fan-space">
          <a className={style.headerItem}>
            Fan Space
          </a>
        </ActiveLink>
        <ActiveLink href="/music-streaming">
          <a className={style.headerItem}>
            Music Streaming
          </a>
        </ActiveLink>
        <ActiveLink href="/nft-marketplace">
          <a className={style.headerItem}>
            NFT Marketplace
          </a>
        </ActiveLink>
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
