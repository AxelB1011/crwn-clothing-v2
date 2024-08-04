import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss'

const Directory = ({category}) => {
    const {id, title, imageUrl} = category;
    return (
        <div className="directory-container">
            {/* Need a unique value when using map */}
            {category.map(({title, id, imageUrl}) => ( 
                <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
            ))}
        </div>
    )
}

export default Directory;