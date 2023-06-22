import "./index.scss";
import {Link} from "react-router-dom";
import React from "react";

const ProductsCards = ({data}) => {
   return(
   <div className="home__card">
    <img src={data.imgPath} alt="model"/>
    <div className="home__card-description">
        <p>{data.title}</p>
    </div>
    <button>
        <Link to={`/products/${data.id}`}>Comprar Look</Link>
    </button>
   </div>
   ); 
}

export default ProductsCards;