import { CartIconContainer, ItemCount, BagIcon } from './cart-icon.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => {setIsCartOpen(!isCartOpen)};
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <BagIcon />
            <ItemCount> {cartCount} </ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;