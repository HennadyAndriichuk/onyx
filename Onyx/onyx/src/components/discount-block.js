import picOne from '../assets/IMG_7086_1.png';
import ellipse1 from '../assets/Ellipse-3.png';
import ellipse2 from '../assets/Ellipse-4.png';
import '../styles/discount-block-styles.scss';



function DiscountBlock ({setModalActive}) {
   const handleClick = () => {
      setModalActive(true);
   }
   return (
      <div className='discount-block-wrapper'>
         <div className='discount-block-container'>
            <div className='discount-block'>
               <div className='discount-text'>
                  Реализация творческих задумок: 
                  можно украсить сутажной вышивкой любимое платье, или расшить
                  воротник блузки
               </div>
               <div className="discount-button" onClick={handleClick}>Получить скидку 20%</div>
            </div>
         </div>
         <div className='discount-image'>
            <img src={picOne} alt='piece of art' className='discount-picture' />
            <img src={ellipse1} alt='elipse1' className='ellipse1' />
            <img src={ellipse2} alt='elipse2' className='ellipse2' />
         </div>
      </div>
   );
};

export default DiscountBlock;