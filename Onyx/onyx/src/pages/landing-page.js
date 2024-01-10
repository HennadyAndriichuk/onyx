import FirstScreen from '../components/first-screen';
import OwlBlock from '../components/owl-block';
import ProductBlockOne from '../components/products-block-one';
import ProductsBlockTwo from '../components/products-block-two';
import Individual from '../components/individual';
import DiscountBlock from '../components/discount-block';
import SubscribeBlock from '../components/subscribe-block';
import Footer from '../components/footer';
import Modal from '../components/modal';
import { useState } from 'react';
import '../styles/landing-page-styles.scss';

function LandingPage (){
   const [modalActive, setModalActive] = useState(false);
   const [isEmailValid, setValidEmail] = useState('');
   const [isDateValid, setValidDate] = useState('');
   const [isNameValid, setValidName] = useState(false);
   return (
         <div className="main">
            <Modal 
               modalActive={modalActive} 
               setModalActive={setModalActive}
               isEmailValid={isEmailValid}
               setValidEmail={setValidEmail}
               isDateValid={isDateValid}
               setValidDate={setValidDate}
               isNameValid={isNameValid}
               setValidName={setValidName}
            />
            <div className="mainflow">
               <FirstScreen />
               <OwlBlock setModalActive={setModalActive} />
               <ProductBlockOne />
               <Individual />
               <ProductsBlockTwo />
               <DiscountBlock setModalActive={setModalActive} />
               <SubscribeBlock setModalActive={setModalActive} />
               <Footer />
            </div>
         </div>
   );
};

export default LandingPage;