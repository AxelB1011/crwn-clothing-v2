import {FormInputLabel, Input, Group} from './form-input.styles';
import PropTypes from 'prop-types';

const FormInput = ( {label, ...otherProps} ) => {
    return (
        <Group>
            <Input {...otherProps} />
            {/* Input needs to come before label because The subsequent-sibling combinator ( ~ , a tilde) separates two selectors and matches all instances of the second element that follow the first element (not necessarily immediately) and share the same parent element. */}
            {label && (<FormInputLabel shrink={otherProps.value.length}> {label} </FormInputLabel>)}

        </Group>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
};

FormInput.defaultProps = {
    label: '',
};

export default FormInput;

