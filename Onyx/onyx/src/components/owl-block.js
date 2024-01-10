import owl from '../assets/img_2.png';
import arrow from '../assets/arrow.png';
import ellipseOne from '../assets/ellipse_1.png';
import ellipseTwo from '../assets/ellipse_2.png';
import '../styles/owl-block-styles.scss';

function OwlBlock ({ setModalActive }){
   return(
      <div className="owl-block-wrapper">
         <div className='discount-container' >
            Получи скидку 20% на первый заказ
            <div className='discount-button' onClick={()=>setModalActive(true)}>
               <div className='button-arrow' >
                  <img src={arrow} alt='arrow' />
               </div>
            </div>
         </div>
         <div className="owl-picture">
            <img src={owl} alt='owl' />
            <img src={ellipseOne} alt='ellipse' className='ellipse-one' />
            <img src={ellipseTwo} alt='ellipse' className='ellipse-two' />
         </div>
         <div className='info-container'>
            <div className='text'>Сутажные украшения, изготовленные из шелкового шнура
               и натуральных камней <span>вручную</span>, придутся по вкусу любителям ретро и романтического стиля. 
            </div>
         </div>
      </div>
   );
};

export default OwlBlock;