import React from 'react';
import { useRouter } from 'next/router'

const style = {
    wrapper: ``,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/274930843_3261458420751081_5488730204460360887_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=A_vT0AOX1FwAX_Ia0-v&_nc_ht=scontent.ftun10-1.fna&oh=03_AVI8dV9SEbHbmQ9ECPFJjdSPao6HmayrYmjL2thpKyUS5g&oe=6246B9D8')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#fb8a25] rounded-lg mr-5 text-white hover:bg-[#FBA055] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
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
                        <button className={style.accentedButton}>Discover</button>
                        <button className={style.button} onClick={handleClick}>Create</button>
                    </div>
                </div>   
                <div className={style.cardContainer}>
                    <img
                        className="rounded-t-lg"
                        src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/274930843_3261458420751081_5488730204460360887_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=A_vT0AOX1FwAX_Ia0-v&_nc_ht=scontent.ftun10-1.fna&oh=03_AVI8dV9SEbHbmQ9ECPFJjdSPao6HmayrYmjL2thpKyUS5g&oe=6246B9D8"
                        alt="random nft image"
                        width={300}
                        height={566}
                    />    
                    <div className={style.infoContainer}>
                        <img 
                            className="h-[2.25rem] rounded-full"
                            src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/275178500_499288168410293_4377281251936432697_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=NX_jv5KKicwAX8xtMAN&_nc_ht=scontent.ftun10-1.fna&oh=03_AVLI4IWO14Q6zJSeDXYC9lSQjRMQoEGGU-sYrtCu6R-YtA&oe=6249905F"
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