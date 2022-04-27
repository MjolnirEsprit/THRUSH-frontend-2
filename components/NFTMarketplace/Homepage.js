import React from 'react';
import { useRouter } from 'next/router'
import Image from "next/image";
import nft from '@assets/nft.jpg'
import Link from 'next/link';


const style = {
    wrapper: `relative`,
    container: `before: bg-black before:content-[''] before:bg-white-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/277683719_663918484817127_5721260059448419424_n.png?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DqYprLUgeRYAX9uTR0d&_nc_ht=scontent.ftun9-1.fna&oh=03_AVJNXosS9lL6v0f_2WCMoAspbr8SWLlqWP-WNcuxF5Xa3w&oe=626EFD6B')] before:bg-cover before:bg-center before:opacity-80 before:blur pb-20 `,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center pt-20 `,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#C8C8C8] font-semibold font-style: italic container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex flex-col w-1/2 mb-5`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#fb8a25] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#fb8a25] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `bg-[#FCF5E5] rounded-[3rem] mb-12`,
    infoContainer: `h-20 bg-[#FCF5E5] p-4 rounded-b-lg flex items-center text-black`,
    author: `flex flex-col justify-center ml-4 bg-[#FCF5E5]`,
    name: `text-black font-semibold`,
    infoIcon: `flex justify-end items-center flex-1 font-semibold text-[#8a939b] text-3xl font-bold`,
}

const Homepage = () => {
    const router = useRouter()


    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>Explore, create and sell marvellous NFTs </div>
                        <div className={style.description}>
                            THRUSH&apos;s NFT marketplace is the new
                            <br />sensation among melophiles
                        </div>
                        <Link href='https://thirdweb.com/dashboard'>
                            <div className={style.ctaContainer}>
                                <button type="button" className={style.button}>Create</button>
                            </div>
                        </Link>
                        <Link href='/nft-marketplace/collections/0x660aF8bB64C0D7aC993F786a6D8cD1E03A5C0E06/'>
                            <div className={style.ctaContainer}>
                                <button type="button" className={style.button}>Collections</button>
                            </div>
                        </Link>
                        <Link href='/nft-marketplace/help-center'>
                            <div className={style.ctaContainer}>
                                <button type="button" className={style.button}>Resources</button>
                            </div>
                        </Link>
                        <Link href='/nft-marketplace/Review'>
                            <div className={style.ctaContainer}>
                                <button type="button" className={style.button}>Reviews</button>
                            </div>
                        </Link>
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
                                <div className={style.name}>
                                    Alan Wellington
                                </div>
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
    )
}
export default Homepage;