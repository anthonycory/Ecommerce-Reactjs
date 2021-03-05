import './App.css';
import React, { useState, useEffect} from 'react'
import axios from 'axios'
// import 'react-notifications/lib/notifications.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineConsoleSql, IconName } from "react-icons/ai";

import Home from './component/Home'
import Nav from './component/Nav'

function App() {

    const [product, setProduct] = useState(null)
    const [purchase, setPurchase] = useState([])
    const [quantityProduct, setQuantityProduct] = useState([])
    const [ArrPrice, setArrPrice] = useState([])
    const [totalPrice, settotalPrice] = useState()
    const url = "https://fakestoreapi.com/products"


    useEffect(() => {
      fetch()
      console.log(ArrPrice)
      console.log(Math.round(totalPrice * 100) / 100)
    }, [url, purchase, quantityProduct, ArrPrice, totalPrice])

    // RECUPERATION DES PRODUITS
    const fetch = () => {
      axios.get(url).then(response => { setProduct(response.data)})
    }

    //AJOUT DE PRODUIT
    const Addproduct = (e, item) => {
        e.preventDefault();
        const a = [...purchase];
        a.push(item)
        setPurchase(a)
        toast.success('Article ajouter au panier')

        const price = [...ArrPrice]
        price.push(item.price)
        setArrPrice(price)

        if(ArrPrice.length != 0) {
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          const total = ArrPrice.reduce(reducer, ArrPrice[0])
          settotalPrice(total)
        }else {
          settotalPrice(item.price)
        }

    }

    // SUPPRESSION PRODUCT
    const RemoveProduct = (e, index) => {
      e.preventDefault()
      console.log(index)
    }


  return (
    <>
        {/* <NavLink exact={true} to="/">hello</NavLink> */}
        <div id="acces-product">
          <h2>Mon panier</h2>
          {purchase.map((item, i) => (
            <div className="product-panier" key={i}>
              <img className="img-product-panier" src={item.image}/>
              <div>
                <p>{item.title.substr(0, 20)}</p>
                <p>{item.title.substr(0, 20)}</p>
              </div>
            </div>
          ))}
        </div>

        <Toaster position="top-left" reverseOrder={true}/>
        <Nav total={purchase.length} price={totalPrice}/>
        <Home Addproduct={Addproduct} />
    </>
  );
}

export default App;
