import { useEffect, useState } from "react"
import "./style.css"
const Listing = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/props/listing/data/etsy.json')
            .then((response) => response.json())
            .then((data) => setItems(data))
    }, [])
    console.log(items)
    return (<div className="item-list">
        {items.map((item) => {
            return (
                <div key={item.listing_id} className="item">
                    <div className="item-image">
                        <a href={item.url}>
                            <img src={item?.MainImage?.url_75x75}/>
                        </a>
                    </div>
                    <div className="item-details">
                        <p className="item-title">{item.title}</p>
                        <p className="item-price">${item.price}</p>
                        <p className="item-quantity level-medium">{item.quantity}</p>
                    </div>
                </div>
            )
        })}

    </div>)
}
export default Listing