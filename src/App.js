import './App.css';
import React, { useState, useEffect} from 'react'
import axios from 'axios'

import Home from './component/Home'
import Nav from './component/Nav'

function App() {

    const [product, setProduct] = useState(null)
    const [purchase, setPurchase] = useState([{id: 1}])
    const [quantityProduct, setQuantityProduct] = useState([])
    const url = "https://fakestoreapi.com/products"

    useEffect(() => {
      fetch()
      console.log(quantityProduct)
    }, [url, purchase, quantityProduct])

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


        for(let i = 0; i < purchase.length; i++) {
          if(purchase[i].id === item.id) {
            console.log("existe déjà")
          }else {
            console.log("non non")
          }
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
          <br></br><br></br><br></br>
          {purchase.length <= 0 ? (
            <li>Aucun article dans le panier</li>
          ) : ( purchase.map((item, index) => (
            <div key={index}>
            <div >{item.title}</div>
            <button onClick={(e) => RemoveProduct(e, index)}>remove</button>
            </div>
            )
          ))}
        </div>
        <Nav total={purchase.length}/>
        <Home Addproduct={Addproduct} />
    </>
  );
}

export default App;
