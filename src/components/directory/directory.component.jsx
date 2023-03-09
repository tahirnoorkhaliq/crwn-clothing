import './directory.styles.scss'
import CatogoryItem from '../category-item/category-item.component';



const Directory=({categories})=>{
    
    return (
        <div className='categories-container'>
          {categories.map((category) => (
            <CatogoryItem key={category.id} category={category}/>
          ))}
        </div>
      );
}

export default Directory