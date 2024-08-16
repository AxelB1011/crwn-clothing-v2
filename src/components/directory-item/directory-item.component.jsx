import {DirectoryItemContainer, DirectoryItemBody, BackgroundImage} from './directory-item.styles'
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate()
    const navigationHandler = () => navigate(route);
    return ( 
        <DirectoryItemContainer onClick={navigationHandler}> 
        <BackgroundImage
          imageUrl={imageUrl}
          // style={{
          //   backgroundImage: `url(${imageUrl})`
          // }}
        />
        {/* For dynamic CSS, we can append custom styles it by passing it to the style object. Key is the property we want to modify. */}
        <DirectoryItemBody>
          <h2> {title} </h2>
          <p> Shop Now </p>
        </DirectoryItemBody>
      </DirectoryItemContainer>
     )
}

export default DirectoryItem;