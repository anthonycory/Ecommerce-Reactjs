import React from 'react'
import { AiFillShopping } from "react-icons/ai";

export default function Nav({total, price}) {

    const totalprice = Math.round(price * 100) / 100;

    const AccesProduct = () => {
        const value = document.getElementById('acces-product')
        value.style.width = "300px"
        console.log("ok")
    }

    return (
        <>
        <nav>
            <div className="container">
                <h1 style={{color: "white"}}>Ecommerce</h1>
                <div className="container-panier">
                    {total === 0 ? <button onClick={AccesProduct} className="panier"> <AiFillShopping color="white" size={20}/>Panier Vide</button> : <button onClick={AccesProduct} className="panier"><AiFillShopping color="white" size={20}/> {total} Articles</button>}
                    {total === 0 ? <></> : <button className="payed">Payer : {totalprice}€</button>}
                </div>
            </div>
        </nav>
        </>
    )
}
