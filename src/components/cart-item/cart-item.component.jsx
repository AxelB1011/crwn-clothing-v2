import {ItemDetails, CartItemContainer} from './cart-item.styles';

const CartItem = ({item}) => {
    const {name, imageUrl, price, quantity} = item;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity}x, ${quantity * price}</span>
            </ItemDetails>
        </CartItemContainer>
    );
};

export default CartItem;