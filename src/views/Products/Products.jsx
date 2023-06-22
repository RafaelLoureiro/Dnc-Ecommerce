import React from 'react';
import "./index.scss";
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Search from '../../components/Search/search';
import ProductsCards from '../../components/ProductsCards/productsCards';
import { useParams } from 'react-router-dom';
import ProductsDetail from "../../components/ProductsDetail/ProductsDetail";
import { Link } from 'react-router-dom';

const Products = ({data})=> {
  const {productId} = useParams();
  const selectProduct = data.find((product) => product.id == productId );
  console.log(selectProduct);

  return (
    <section className='products'>
            <HeaderMenu/>
            <Search/>
            <ProductsDetail data={selectProduct}/>
    </section>
  );
}

export default Products;