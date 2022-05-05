// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract NFT is ERC721URIStorage{
    uint public tokenCount;
    constructor() ERC721("DApp NFT", "DAPP"){}
    //function accepts only input of metadata of nft(link of where the content of the nft can be found on ipfs)
    //j'ai specifié emplacement mémoire de l'argument
    function mint (string memory _tokenURI) external returns(uint){
        tokenCount ++;
        //passit l'adresse pour laquelle j'ai minté et token id
        _safeMint(msg.sender, tokenCount);
        //définit les métadonnées pour les nouveaux nft
        _setTokenURI(tokenCount, _tokenURI);
        return(tokenCount);
    }
    

}

