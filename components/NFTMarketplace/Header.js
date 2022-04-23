import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import thrushLogo from '@assets/thrushLogo.png'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import Home from '../../pages/index'

const style = {
    wrapper: `bg-[#000000] w-screen px-[1.2rem] py-[0.8rem] flex `,
    logoContainer: `flex items-center cursor-pointer mr-12`,
    logoText: ` ml-[0.8rem] text-[#FD7F2C] font-semibold text-2xl mr-12`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center justify-end flex items-center justify-center space-x-12`,
    headerItem: `text-white px-4 space-x-8 font-bold text-white hover:text-[#8a939b] cursor-pointer`,
    headerIcon: `flex items-center cursor-pointer space-x-12 text-white text-3xl font-white px-4 hover:text-[#8a939b] cursor-pointer`,
  }
  
const Header = () =>{
    
    return <div className={style.wrapper}>
        <Link href="/">
            <div className={style.logoContainer}>
                <Image src={thrushLogo} height={40} width={40} />
                <div className={style.logoText}>THRUSH</div>
            </div>
        </Link>
       
        <div className={style.headerItems}>
            <Link href="/nft-marketplace/collections/0x660aF8bB64C0D7aC993F786a6D8cD1E03A5C0E06/">
                <div className={style.headerItem}>Collections</div>
            </Link>
            <Link href="/nft-marketplace/help-center">
                <div className={style.headerItem}>Resources</div>
            </Link>
            <Link href="/nft-marketplace/Reviews">
                <div className={style.headerItem}>Reviews</div>
            </Link>
            <Link href="https://thirdweb.com/dashboard">
                <div className={style.headerItem}>Create</div>
            </Link>        
      
        </div>

    </div>;
};

export default Header;