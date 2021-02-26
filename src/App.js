import './App.css';
import React, { useState, useEffect} from 'react'
import axios from 'axios'

import Home from './component/Home'
import Nav from './component/Nav'

function App() {

    const [product, setProduct] = useState(null)
    const [purchase, setPurchase] = useState([{id : 0}])
    const [quantity, setQuantity] = useState([])
    const url = "https://fakestoreapi.com/products"

    useEffect(() => {
      fetch()
      console.log(purchase)
    }, [url, purchase, quantity])

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

              console.log([{id: 1, quantity: 5}, {id: 2, quantity: 2}])
        for (let i = 0; i < quantity.length; i++) {
          if(quantity[i].index != -1) {
    
          }
        }
    }

    const RemoveProduct = (e, index) => {
      e.preventDefault()
      console.log(index)
    }


  return (
    <>
        {/* <NavLink exact={true} to="/">hello</NavLink> */}
        <div id="acces-product">
          <br></br><br></br><br></br>
          {quantity[0]}
          {purchase.length <= 0 ? 
          <li>Aucun article dans le panier</li> : 
          ( purchase.map((item, index) => (
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
