import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useWeb3 } from '@3rdweb/hooks'
import { client } from '../../../lib/sanityClient'
import { ThirdwebSDK } from '@3rdweb/sdk'
import Navbar from "@components/common/main_navbar";
import { CgWebsite } from 'react-icons/cg'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { HiDotsVertical } from 'react-icons/hi'
import NFTCard from '@components/NFTMarketplace/NFTCard'
import Footer from "@components/common/footer";

const style = {
    bannerImageContainer: `mt-20 h-[20vh] w-screen overflow-hidden flex justify-center items-center`,
    bannerImage: `w-full object-cover`,
    infoContainer: `w-screen px-4`,
    midRow: `w-full flex justify-center text-black`,
    endRow: `w-full flex justify-end text-black`,
    profileImg: `w-40 h-40 object-cover rounded-full border-2 border-[#202225] mt-[-4rem]`,
    socialIconsContainer: `flex text-3xl mb-[-2rem]`,
    socialIconsWrapper: `w-44`,
    socialIconsContent: `flex container justify-between text-[1.4rem] border-2 rounded-lg px-2`,
    socialIcon: `my-2`,
    divider: `border-r-2`,
    title: `text-5xl font-bold mb-4`,
    createdBy: `text-lg mb-4`,
    statsContainer: `w-[44vw] flex justify-between py-4 border border-[#151b22] rounded-xl mb-4`,
    collectionStat: `w-1/4 text-black`,
    statValue: `text-3xl font-bold w-full flex items-center justify-center`,
    ethLogo: `h-6 mr-2`,
    statName: `text-lg w-full text-center mt-1 text-black`,
    description: `text-[#8a939b] font-bold text-xl w-max-1/4 flex-wrap mt-4 mb-4`,
}

const Collection = () => {
    const router = useRouter()
    const { provider } = useWeb3()
    const { collectionId } = router.query
    const [collection, setCollection] = useState([]) 
    const [nfts, setNfts] = useState([])
    const [listings, setListings] = useState([])

    //https://eth-rinkeby.alchemyapi.io/v2/tPbjtnwWeXEapehEQB4xVUR-ROoJXDjC
    const nftModule = useMemo(() => {
        //if provider exists, create web sdk
        if (!provider) return
        const sdk = new ThirdwebSDK(
            provider.getSigner(),
       
        )
        return sdk.getNFTModule(collectionId)
    }, [provider])

    //get NFTs inside the collection
    //if nft loaded the useEffect model will run else run an IIFE
    useEffect(() => {
        if (!nftModule) return //if nft module does not exist, exit
            ; (async () => {
                const nfts = await nftModule.getAll()//get nfts from nftModule
                setNfts(nfts)

            })()
        //we'll get nfts from the nft module
    }, [nftModule])

    const marketPlaceModule = useMemo(() => {
        if (!provider) return
        const sdk = new ThirdwebSDK(
            provider.getSigner(),
        )
        return sdk.getMarketplaceModule(
            '0x57017aC88f6A5CB72C54541f30565e3f5874A989'
        )
    }, [provider])

    //get all listings in the collection
    //we used the useEffect to look for a marketplace module
    useEffect(() => {
        if (!marketPlaceModule) return
            ; (async () => {
                setListings(await marketPlaceModule.getAllListings())
            })()
    }, [marketPlaceModule])

    //get data collection and await it
    const fetchCollectionData = async (sanityClient = client) => {
        const query = `*[_type == "marketItems" && contractAddress == "${collectionId}"]{
        "imageUrl": profileImage.asset->url,
        "bannerImageUrl": bannerImage.asset->url,
        volumeTraded,
        createdBy,
        contractAddress,
        "creator": createdBy->userName,
        title, floorPrice,
        "allOwners": owners[]->,
        description  
    }`

        //storing data returned by query inside the collection
        const collectionData = await sanityClient.fetch(query)
        console.log(collectionData, '💥')
        await setCollection(collectionData[0])
    }
    /*whenever we runs into the collection page el query s'execute
    tjib el query mel queryparameter w par consequent tjib el id taa collection*/
    //ceate a hook, look for collection id
    useEffect(() => {
        fetchCollectionData()
    }, [collectionId])

    console.log(router.query.collectionId)

    return (//scrollbars hiden
        <>
        <div className='overflow-hidden'>
            <Navbar />
            <div className={style.bannerImageContainer}>
                <img
                    className={style.bannerImage}
                    src={collection?.bannerImageUrl ?
                        collection.bannerImageUrl
                        : 'https://via.placeholder.com/200'}
                    alt="bannerImage"
                />
            </div>
            <div className={style.infoContainer}>
                <div className={style.midRow}>
                    <img
                        className={style.profileImg}
                        src={
                            collection?.imageUrl
                                ? collection.imageUrl
                                : 'https://via.placeholder.com/200'
                        }
                        alt="profile image"
                    />
                </div>
                <div className={style.endRow}>
                    <div className={style.socialIconsContainer}>
                        <div className={style.socialIconsWrapper}>
                            <div className={style.socialIconsContent}>
                                <div className={style.socialIcon}>
                                    <CgWebsite />
                                </div>
                                <div className={style.divider} />
                                <div className={style.socialIcon}>
                                    <AiOutlineInstagram />
                                </div>
                                <div className={style.divider} />
                                <div className={style.socialIcon}>
                                    <AiOutlineTwitter />
                                </div>
                                <div className={style.divider} />
                                <div className={style.socialIcon}>
                                    <HiDotsVertical />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.midRow}>
                    <div className={style.title}>{collection?.title}</div>
                </div>
                <div className={style.midRow}>
                    <div className={style.description}>{collection?.description}</div>
                </div>
               
                <div className={style.midRow}>
                    <div className={style.statsContainer}>
                        <div className={style.collectionStat}>
                            <div className={style.statValue}>
                                {nfts.length}
                            </div>
                            <div className={style.statName}>
                                items
                            </div>
                        </div>
                        <div className={style.collectionStat}>
                            <div className={style.statValue}>
                                <img
                                    src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                                    alt="eth"
                                    className={style.ethLogo}
                                />
                                {collection?.floorPrice}
                            </div>
                            <div className={style.statName}>floor price</div>
                        </div>
                        <div className={style.collectionStat}>
                            <div className={style.statValue}>
                                <img
                                    src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                                    alt="eth"
                                    className={style.ethLogo}
                                />
                                {collection?.volumeTraded} K
                            </div>
                            <div className={style.statName}>volume traded</div>
                        </div>
                    </div>
                </div>
             
                <div className={style.midRow}>
                    <div className={style.createdBy}>
                        Created by {' '}
                        <span className="text-[#C479DC]">{collection?.creator}</span>
                    </div>
                </div>

            </div>
            <div className=" mb-20 flex flex-wrap">
                {nfts.map((nftItem, id) => (
                    <NFTCard
                        key={id}
                        nftItem={nftItem}
                        title={collection?.title}
                        listings={listings}
                    />
                ))}
            </div>
        </div>
        <div class="footer">
           <Footer />
        </div>
        </>
    )
}
export default Collection;