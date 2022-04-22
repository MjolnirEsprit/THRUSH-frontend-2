import React from "react"
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from "@3rdweb/hooks"
import { ThirdwebSDK } from "@3rdweb/sdk"
import { useRouter } from "next/router"
import Navbar from "@components/common/main_navbar";
import NFTImage from '@components/NFTMarketplace/nft/NFTImage'
import GeneralDetails from '@components/NFTMarketplace/nft/GeneralDetails'
import Purchase from '@components/NFTMarketplace/nft/Purchase'

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
    const { provider } = useWeb3()
    const [selectedNft, setSelectedNft] = useState()
    const [listings, setListings] = useState([])//tracks the state of our selected nfts
    //pulli data from query + url parameters 
    const router = useRouter()

    const nftModule = useMemo(() => {
        if (!provider) return
        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            
        )
        //Nft module url
        return sdk.getNFTModule('0x660aF8bB64C0D7aC993F786a6D8cD1E03A5C0E06')
    }, [provider])

    //get all nfts in the collection
    useEffect(() => {
        if (!nftModule) return
            ; (async () => {
                const nfts = await nftModule.getAll()
                //we filter based aal specific assetId
                const selectedNftItem = nfts.find(
                    (nft) => nft.id === router.query.nftId
                )
                setSelectedNft(selectedNftItem)
            })()
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

    useEffect(() => {
        if (!marketPlaceModule) return
            ; (async () => {
                setListings(await marketPlaceModule.getAllListings())
            })()
    }, [marketPlaceModule])

    return (
        <div>
            <Navbar />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.topContent}>
                        <div className={style.nftImgContainer}>
                            <NFTImage selectedNft= {selectedNft} />
                        </div>
                        <div className={style.detailsContainer}>
                            <GeneralDetails selectedNft={selectedNft} />    
                            <Purchase 
                                isListed= {router.query.isListed}
                                selectedNft={selectedNft}
                                listings={listings}
                                marketPlaceModule={marketPlaceModule}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Nft;