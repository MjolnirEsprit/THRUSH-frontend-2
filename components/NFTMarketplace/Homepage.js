import React from 'react';
import { useRouter } from 'next/router'
import Image from "next/image";
import nft from '../../public/assets/nft.jpg'


const style = {
    wrapper: `relative`,
    container: `before: bg-black before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/277683719_663918484817127_5721260059448419424_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DqYprLUgeRYAX9uTR0d&_nc_ht=scontent.ftun9-1.fna&oh=03_AVJNXosS9lL6v0f_2WCMoAspbr8SWLlqWP-WNcuxF5Xa3w&oe=626EFD6B')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#fb8a25] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#fb8a25] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem] mb-12`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }

const Homepage = () =>{
    const router = useRouter()
    const handleClick = e => {
      e.preventDefault()
      router.push('https://thirdweb.com/dashboard')
    }
  
    return <div className={style.wrapper}>
        <div className={style.container}>
            <div className={style.contentWrapper}>
                <div className={style.copyContainer}>
                    <div className={style.title}>Explore, create and sell marvellous NFTs </div>  
                    <div className={style.description}>
                        THRUSH is the world&apos;s first NFT marketplace wholly dedicated to music integrated within a web application   
                    </div>  
                    <div className={style.ctaContainer}>
                        <button className={style.button} onClick={handleClick}>Create</button>
                    </div>
                </div>   
                    <div className={style.cardContainer}>
                    <Image
                        className="rounded-t-lg"
                        src={nft}
                        alt="random nft image"
                        width="300"
                        height="400"
                    />    
                    <div className={style.infoContainer}>
                        <img 
                            className="h-[2.25rem] bg-black rounded-full"
                            src="https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/277683719_663918484817127_5721260059448419424_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DqYprLUgeRYAX9uTR0d&_nc_ht=scontent.ftun9-1.fna&oh=03_AVJNXosS9lL6v0f_2WCMoAspbr8SWLlqWP-WNcuxF5Xa3w&oe=626EFD6B"
                            alt=""
                    />
                         <div className={style.author}>
                        <div className={style.name}> Alan Wellington</div>
                        <a
                            className="text-[#C479DC]"
                            href=""
                        >
                            Be yourself
                        </a>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    
    </div>
}
export default Homepage;