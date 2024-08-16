import './button.styles'
import { BaseButton, GoogleButton, InvertedButton, AddToCartButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
    atc: 'add-to-cart',
};

const getButton = (buttonType=BUTTON_TYPE_CLASSES.base) => ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.atc]: AddToCartButton,
}[buttonType]);

const Button = ({children, buttonType, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton {...otherProps}> 
            {children} 
        </CustomButton>
    );
};

export default Button;