import Header from '@components/NFTMarketplace/Header'
import Homepage from '@components/NFTMarketplace/Homepage'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react'
import { client } from '../../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import coin from '../../assets/coin.png'
import {Footer, MainNavbar, Navbar} from "@components/common";

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-[#e65c00] via-[#FF512F] to-[#F09819] `,
  button: `border border-[#282b2f] bg-[#fb8a25] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
  header: `flex items-center justify-center mt-12 mb-12`,
  title: `text-white font-bold w-1/2 text-4xl mt-8 mb-12 text-left italic mt-12`,
  coinImage: `w-1/2`,

}

export default function NFTMarketplace() {
  const { address, connectWallet } = useWeb3() //gives us access to address and to the cnnect wallet
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName !== 'Unnamed' ? `${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff'
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
      ; (async () => {
        const userDoc = {
          _type: 'users',
          _id: address,
          userName: 'Unnamed',
          walletAddress: address
        }
        //user added in sanity
        const result = await client.createIfNotExists(userDoc)
        welcomeUser(result.userName)
      })() //function called right away
  }, [address])
    ; (() => console.log('minmin'))()

  return (
    <div className={style.wrapper}>
    <Toaster position="top-center" reverseOrder={false} />
    {address ? (
      <>
      <Header/>
      <Homepage />
      </>
    ):(
      <div className={style.walletConnectWrapper}>
        <div className={style.homepage}>
          <div className={style.header}>
            <div className={style.title}>
              Welcome to Thrush's
              <br />
              NFT Marketplace
            </div>
            <div className={style.coinImage}>
              <Image src={coin} width='340' height='300' alt="" />
            </div>

          </div>

          <div className={style.walletConnectWrapper}>

            <button
              className={style.button}
              onClick={() => connectWallet('injected')}
            >
              Connect Wallet
            </button>

            <div className={style.details}>
              You need Chrome to
              <br /> be able to run this app.
            </div>
          </div>
        </div>
    <Footer/>
    </div>
      )}
</div>
  )

}
