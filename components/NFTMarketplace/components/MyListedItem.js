import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Row, Col, Card } from 'react-bootstrap';
import AudioPlayer from "react-h5-audio-player";

function renderSoldItems(items) {
    return (
      <>
        <h2>Sold</h2>
        <Row xs={1} md={2} lg={4} className="g-4 py-3">
          {items.map((item, idx) => (
            <Col key={idx} className="overflow-hidden">
              <Card>
                <Card.Header>
                  {item.name}
                </Card.Header>
                <Card.Body>
                  <AudioPlayer variant="top" src={item.audio} onPlay={e => console.log("onPlay")} />
                </Card.Body>
                <Card.Footer>
                  For {ethers.utils.formatEther(item.totalPrice)} ETH - Received {ethers.utils.formatEther(item.price)} ETH
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  }
  
export default function MyListedItems({ marketplace, nft, account }) {
    const [loading, setLoading] = useState(true)
    const [listedItems, setListedItems] = useState([])
    const [soldItems, setSoldItems] = useState([])
    const loadListedItems = async () => {
        //load all sold items that user listed
        const itemCount = await marketplace.itemCount()
        let listedItems = []
        let soldItems = []
        for (let indx = 1; indx <= itemCount; indx++) {
            //return all items from mp
            const i = await marketplace.items(indx)
            if (i.seller.toLowerCase() === account) {
                const uri = await nft.tokenURI(i.tokenId)
                // use uri to fetch the nft metadata stored on ipfs 
                const response = await fetch(uri)
                const metadata = await response.json()
                // get total price of item (item price + fee)
                const totalPrice = await marketplace.getTotalPrice(i.itemId)
                let item = {
                    totalPrice,
                    price: i.price,
                    itemId: i.itemId,
                    name: metadata.name,
                    description: metadata.description,
                    audio: metadata.audio
                }
                listedItems.push(item)
                //add listed item to sold items array if sold
                if (i.sold) soldItems.push(item)
            }
        }
        //after fetchin
        setLoading(false)
        setListedItems(listedItems)
        setSoldItems(soldItems)
    }
    //load user listed items
    useEffect(() => {
        loadListedItems()
    }, [])

    if (loading) return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Loading...</h2>
        </main>
    )
    return (
        <div className="flex justify-center">
            {listedItems.length > 0 ?
                <div className="px-5 py-3 container">
                    <h2>Listed</h2>
                    <Row xs={1} md={2} lg={4} className="g-4 py-3">
                        {listedItems.map((item, idx) => (
                            <Col key={idx} className="overflow-hidden">
                                <Card>
                                    <Card.Header>
                                        {item.name}
                                    </Card.Header>
                                    <Card.Body>
                                        <AudioPlayer variant="top" src={item.audio} onPlay={e => console.log("onPlay")} />
                                    </Card.Body>
                                    <Card.Footer>{ethers.utils.formatEther(item.totalPrice)} ETH</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {soldItems.length > 0 && renderSoldItems(soldItems)}
                </div>
                : (
                    <main style={{ padding: "1rem 0" }}>
                        <h2>No listed assets</h2>
                    </main>
                )}
        </div>
    );
}