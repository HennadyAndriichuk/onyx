import '../styles/product-card-styles.scss';




function ProductCard ({image, text}){
   
   return(
      <div className="product-card-wrapper">
         <div className="product-card-container">
            <div className="product-image">
               <img src={image} alt='item' />
            </div>
            <div className="product-description">
               {text}
            </div>
         </div>
      </div>
   );
};

export default ProductCard;