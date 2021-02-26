import React, {useEffect, useState } from 'react'
import axios from 'axios'




export default function Home({ Addproduct}) {
    const [product, setProduct] = useState(null)
    const [purchase, setPurchase] = useState([])
    const url = "https://fakestoreapi.com/products"

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setProduct(response.data)
        })
        console.log(purchase)
    }, [url, purchase])

    // const Addproduct = (event, item) => {
    //     event.preventDefault();
    //     const a = [...purchase];
    //     a.push(item)
    //     setPurchase(a)
    // }


if(product) {
    return (
        <div className="main">
            <div className="container-item">

            {product.map((item, index) => (
                       <div className="card" key={index} style={{width: "18rem"}}>
                           <div className="" style={{display: "flex", height: 250, alignItems: "center"}}> 
                       <img className="card-img-top" src={item.image} style={{width: 150, marginRight: "auto", marginLeft: "auto"}}  alt="Card image cap"/>
                           </div>
                       <div className="card-body">
                         <h5 className="card-title">{item.title.substring(0, 20)}</h5>
                         <p className="card-text">{item.price} €</p>
                         <a href="#" onClick={(e) => Addproduct(e, item)} className="btn btn-primary">Ajouter au panier</a>
                       </div>
                     </div>
            ))}
            </div>
        </div>
    )
}else {
    return (
        <div className="">loading</div>
    )
}
}
