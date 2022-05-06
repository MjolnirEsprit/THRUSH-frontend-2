import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Row, Col, Card } from 'react-bootstrap';
import AudioPlayer from "react-h5-audio-player";

export default function MyPurchases({ marketplace, nft, account }) {
    const [loading, setLoading] = useState(true)
    const [purchases, setPurchases] = useState([])//items purchased by user
    const loadPurchasedItems = async () => {
        //fetch bought items frm mp by querying offered events with buyer set as user
        const filter = marketplace.filters.Bought(null, null, null, null, null, account)
        const results = await marketplace.queryFilter(filter)//filter to find specific events
        //fetch metadata of each nft and add it to listedItem obj
        const purchases = await Promise.all(results.map(async i => {
            //get arguments from each result
            i = i.args
            //get data from ipfs
            const uri = await nft.tokenURI(i.tokenId)
            const response = await fetch(uri)
            const metadata = await response.json()
            //get total price
            const totalPrice = await marketplace.getTotalPrice(i.itemId)
            let purchasedItem = {
                totalPrice,
                price: i.price,
                itemId: i.itemId,
                name: metadata.name,
                description: metadata.description,
                audio: metadata.audio
            }
            return purchasedItem
        }))
        setLoading(false)
        setPurchases(purchases)

    }
    //kol me ymounti el component naaytou lel fonction
    useEffect(() => {
        loadPurchasedItems()
    }, [])

    if (loading) return (
        <main style={{ padding: "1rem 5" }}>
            <h2>Loading...</h2>
        </main>
    )

    return (
        <div className="flex justify-center">
            {purchases.length > 0 ?
                <div className="px-5 container">
                    <Row xs={1} md={2} lg={4} className="g-4 py-5">
                        {purchases.map((item, idx) => (
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
                </div>
                : (
                    <main style={{ padding: "1rem 0" }}>
                        <h2>No purchases</h2>
                    </main>
                )}
        </div>
    );
}