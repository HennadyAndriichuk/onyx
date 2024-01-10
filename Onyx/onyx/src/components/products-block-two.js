import ProductCard from './product-card';
import ProductsData from '../product-data';
import '../styles/product-block-two-styles.scss';

function ProductsBlockTwo () {
   return(
      <div className='products-block-wrapper'>
         <div className='products-container'>
            {ProductsData.map((product)=>{
               if(product.id >=4){
                  return <ProductCard 
                     image={product.image} 
                     text={product.text} 
                     key={product.id} 
                  />
               }
            })}
         </div>
      </div>
   );
};

export default ProductsBlockTwo;