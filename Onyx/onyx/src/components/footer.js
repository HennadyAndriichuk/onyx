import ellipse from '../assets/ellipse_1.png';
import instagram from '../assets/instagram_logo.png';
import whatsup from '../assets/whatsup_logo.png';
import '../styles/footer-styles.scss';

function Footer (){
   return(
      <div className='footer-wrapper'>
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
         <div className='footer-contacts-container'>
            <div className='footer-contacts'>
               <div className='footer-number'>8 800 6849007</div>
               <div className='footer-address'>Одесса ул. Троицкая, 2</div>
            </div>
         </div>
      </div>
   );
};

export default Footer;