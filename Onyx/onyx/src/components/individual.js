import picOne from '../assets/6940_1.png';
import picTwo from '../assets/30_1.png';
import ellipse8 from '../assets/Ellipse_8.png';
import ellipse9 from '../assets/Ellipse_9.png';
import '../styles/individual-styles.scss';

function Individual (){
   return(
      <div className='individual-wrapper'>
         <div className="individual-container">
            <div className="individual-text">
               Каждое изделие создается в единственном экземпляре.<br/> 
               Также возможно изготовление на заказ.
            </div>
            <div className="individual-image-two">
               <img src={picTwo} alt='piece of art' />
            </div>
            <div className="try-on-block-adaptive">
               <div className="try-text-container">
                  <div className="try-on-text">
                     Помощь в подборе украшения к наряду, примерка в Одессе.
                  </div>
               </div>
            </div>
            <div className="individual-image">
               <img src={picOne} alt='piece of art' className='pic-one' />
               <img src={ellipse8} alt='ellipse' className='ellipse8-adaptive' />
               <img src={ellipse9} alt='ellipse' className='ellipse9-adaptive' />
            </div>
            
            <img src={ellipse8} alt='ellipse' className='ellipse8' />
            <img src={ellipse9} alt='ellipse' className='ellipse9' />
         </div>
         <div className="try-on-block">
            <div className="try-text-container">
               <div className="try-on-text">
                  Помощь в подборе украшения к наряду, примерка в Одессе.
               </div>
            </div>
         </div>
      </div>
   );
};

export default Individual;