import React from 'react'
import { IoMdSnow } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'

const style = {
    topBar: `bg-[#f5f5f5] p-2 rounded-t-lg border`,
    topBarContent: `flex items-center text-black`,
    likesCounter: `flex-1 flex items-center justify-end`,
}

const NFTImage = ({ selectedNft }) => {
    return (
        <div>
            <div className={style.topBar}>
                <div className={style.topBarContent}>
                    <IoMdSnow color='black' />
                <div className={style.likesCounter}>
                <AiOutlineHeart/>
                </div>
                </div>
            </div>
            <div>
                <img src={selectedNft?.image} />
            </div>
        </div>
    )
}
export default NFTImage;