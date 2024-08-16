import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss'

const Category = () => {
    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [product, setProduct] = useState(categoriesMap[category]);
    useEffect(() => {
        setProduct(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {
                    product && product.map((prod) => <ProductCard key={prod.id} product={prod} />)
                    //safeguard 
                    //we fetch products asynchronously from firestore but out component mounts synchronously
                    //we're basically saying render the Product card only if product has some data
                }
            </div>
        </Fragment>
    );
};

export default Category;