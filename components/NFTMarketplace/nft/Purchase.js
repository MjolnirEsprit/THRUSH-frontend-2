
import { useEffect, useState } from "react"
import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from "react-hot-toast"


const style = {
    button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
    buttonIcon: `text-xl`,
    buttonText: `ml-2 text-lg font-semibold`
}

const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule }) => {
    const [selectedMarketNft, setSelectedMarketNft] = useState()
    const [enableButton, setEnableButton] = useState(false)

    /* si c'est pas listé ou bien listed=false then return
    whenever selectedNft, listings and isListed sont mise à jour, loadi el useEffect 
    une autre fois */
    useEffect(() => {
        if (!listings || isListed === 'false') return
            ; (async () => {
                /*lawej aal mrketnft si marketnft correspond lel selectedNft donc nsettiw el nft 
                comme selectedMarketNft*/
                setSelectedMarketNft(
                    listings.find(marketNft => marketNft.asset?.id === selectedNft.id)
                )
            })()
    }, [selectedNft, listings, isListed])

    /*si on n'a defini ni el selectedNft ni selectedMarketNft*/
    useEffect(() => {
        if (!selectedMarketNft || !selectedNft) return
        //else set enable button value to true 
        setEnableButton(true)
    }, [selectedMarketNft, selectedNft])//track these two's states

    const confirmPurchase = (toastHandler = toast) =>
        toastHandler.success(`Purchase successful`, {
            style: {
                background: '#04111d',
                color: '#fff'
            }
        })

    //buy function with is defaults
    const buyItem = async (
        listingId = selectedMarketNft.id,
        quantityDesired = 1,
        module = marketPlaceModule
    ) => {//method of thirdweb for buying an nft
        console.log(listingId, quantityDesired, module, 'minmin')
        await module.buyoutDirectListing({
            listingId: listingId,
            quantityDesired: quantityDesired
        })
            .catch((error) => console.error(error))
        confirmPurchase()
    }

    return (
        <div className='bg-[#FAF9F6] h-20 w-1/2 flex items-center 
            px-12 rounded-lg border-[#E2DFD2] border'>
            <Toaster position='top-center' reverseOrder={false} />
            {isListed === 'true' ? (
                <>
                    <div onClick={() => {
                        //if button clicked render out buyItem method then render buy now button
                        enableButton ? buyItem(selectedMarketNft.id, 1) : null
                    }}
                        className={`${style.button} bg-[#fb8a25] hover:bg-[#FBA055]`}
                    >
                        <IoMdWallet className={style.buttonIcon} />
                        <div className={style.buttonText}>Buy now</div>
                    </div>
            
                </>
            ) : (
                <div className={`${style.button} bg-[#fb8a25] hover:bg-[#FBA055]`}>
                    <IoMdWallet className={style.buttonIcon} />
                    <div className={style.buttonText}>List Item</div>
                </div>
            )}

        </div>
    )

}

export default MakeOffer