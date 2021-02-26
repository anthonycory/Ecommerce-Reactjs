import React from 'react'

export default function Nav({total}) {
    
    const AccesProduct = () => {
        const value = document.getElementById('acces-product')
        value.style.width = "300px"
    }
    return (
<>
<nav className="navbar navbar-light bg-light">
    <div className="container">

  <span className="navbar-brand mb-0 h1">Ecommerce</span>
  <div className="">
  <button onClick={AccesProduct}>
  <i className="bi-bag-fill" style={{color: "#797676"}}></i>
  <span className="badge badge-pill badge-primary">{total}</span>
  </button>
  </div>
    </div>
</nav>
</>
    )
}
