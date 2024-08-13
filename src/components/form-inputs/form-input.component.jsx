import './form-input.styles.scss';
import PropTypes from 'prop-types';

const FormInput = ( {label, ...otherProps} ) => {
    return (
        <div className='group'>
            <input className='form-input' {...otherProps} />
            {/* Input needs to come before label because The subsequent-sibling combinator ( ~ , a tilde) separates two selectors and matches all instances of the second element that follow the first element (not necessarily immediately) and share the same parent element. */}
            {label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)}
            {/* <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> */}
        </div>
    );
};

FormInput.propTypes = {
    label: PropTypes.string,
};

FormInput.defaultProps = {
    label: '',
};

export default FormInput;

