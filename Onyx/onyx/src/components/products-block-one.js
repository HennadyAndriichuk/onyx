import ProductCard from '../components/product-card';
import ProductsData from '../product-data';
import '../styles/product-block-one-styles.scss';

function ProductBlockOne () {
   return(
      <div className='productBlockOne-wrapper'>
         <div className='products-container'>
            {ProductsData.map((product)=>{
               if(product.id <= 3){
                  return <ProductCard image={product.image} text={product.text} key={product.id} />
               }
            })}
         </div>
      </div>
   );
};

export default ProductBlockOne;