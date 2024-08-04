import './category-item.styles.scss'

const CategoryItem = ( { title, imageUrl } ) => {
    // const {title, imageUrl} = category;
    return ( 
        <div className="category-container"> 
        <div 
          className="background-image" 
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        {/* For dynamic CSS, we can append custom styles it by passing it to the style object. Key is the property we want to modify. */}
        <div className="category-body-container">
          <h2> {title} </h2>
          <p> Shop Now </p>
        </div>
      </div>
     )
}

export default CategoryItem;