import Homepage from '@components/NFTMarketplace/Homepage';
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';
import { client } from '../../lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';
import MusicStreaming from "../music-streaming";
import Navbar from "@components/common/main_navbar";
import Footer from "@components/common/footer";
import { BaseLayout } from "@components/common/layout";
import Home from "../courses-marketplace";

const style = {
  wrapper: `relative`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-[#e65c00] via-[#FF512F] to-[#F09819] `,
  button: `flex border border-[#282b2f] bg-[#fb8a25] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4 mb-20`,
  header: `flex items-center justify-center mt-12 mb-12`,
  title: ` text-white font-bold w-1/2 text-4xl mt-8 mb-12 text-left italic mt-12`,


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
    <>
      < Navbar />
      <div className={style.wrapper}>
        {address ? (
          <>
            <Homepage />
          </>
        ) : (
          <div>
            <div className=" pt-72 flex flex-col justify-center items-center">
              <button
                className={style.button}
                onClick={() => connectWallet('injected')}
              >
                Connect Wallet
              </button>
            </div>
              <div className={style.details}>
                You need Chrome to
                <br /> be able to run this app
                <br /> or connect to Rinkeby network.
              </div>
          </div>
        )
        }
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>

  )

}