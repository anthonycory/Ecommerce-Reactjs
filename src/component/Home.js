import React, {useEffect, useState } from 'react'
import axios from 'axios'




export default function Home({ Addproduct}) {
    const [product, setProduct] = useState(null)
    const url = "https://fakestoreapi.com/products"

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setProduct(response.data)
        })

    }, [url])

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
                           {/* <div className="card-img">
                                <img className="card-img-top" src={item.image} style={{width: 150, height: "auto", marginRight: "auto", marginLeft: "auto"}}  alt="lo"/>
                            </div> */}
                            <div className="border-img" style={{display: "flex", height: 250, alignItems: "center"}}> 
                       <img className="card-img-top" src={item.image} style={{width: 150, marginRight: "auto", marginLeft: "auto"}}  alt="lo"/>
                           </div>
                       <div className="card-body">
                            <div style={{display: "flex", justifyContent: "space-between", width: "100%"}}>
                                <p>{item.title.substr(0, 20)}</p>
                                <p>{item.price} €</p>
                            </div>
                            <button onClick={(e) => Addproduct(e, item)}>Panier</button>
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
