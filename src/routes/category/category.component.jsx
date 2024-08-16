import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles';

const Category = () => {
    const {category} = useParams();
    const { categoriesMap } = useContext(CategoriesContext);

    const [product, setProduct] = useState(categoriesMap[category]);
    useEffect(() => {
        setProduct(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {
                    product && product.map((prod) => <ProductCard key={prod.id} product={prod} />)
                    //safeguard 
                    //we fetch products asynchronously from firestore but out component mounts synchronously
                    //we're basically saying render the Product card only if product has some data
                }
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;