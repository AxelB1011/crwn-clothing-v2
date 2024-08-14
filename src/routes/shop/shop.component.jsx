import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss';

const Shop = () => {
  const {products} = useContext(ProductsContext);
  return (
    <div className='products-container'>
        {
          //The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        };
    </div>
  )
}

export default Shop;