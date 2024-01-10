import ellipse from '../assets/ellipse_1.png';
import instagram from '../assets/instagram_logo.png';
import whatsup from '../assets/whatsup_logo.png';
import picOne from '../assets/img_1.png';
import '../styles/first-screen-style.scss';

function FirstScreen () {
   return(
      <div className="first-screen-wrapper">
         <div className='header-wrapper'>
            <div className='header-container'>
               <div className='header-logo-container'>
                  <div className='ellipse'>
                     <img src={ellipse} alt='logo' />
                  </div>
                  <div className='logo-text'>ONYX</div>
               </div>
               <div className='socials-container'>
                  <img src={instagram} alt='instagram' />
                  <img src={whatsup} alt='whatsup' />
               </div>
            </div>
         </div>
         <div className="content-wrapper">
            <div className='content-container'>
               <div className="title-container">
                  <div className='title'>Ощути на себе силу красоты</div>
                  <div className='description'>Выбери лучшее авторское украшение</div>
               </div>
               <div className='picture'>
                  <div className='description-inPic'>Выбери лучшее авторское украшение</div>
                  <img src={picOne} alt='piece of art' />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FirstScreen;