import { useState } from 'react';
import axios from 'axios';
import '../styles/modal-styles.scss';

function Modal ({
   modalActive, setModalActive,
   isEmailValid, setValidEmail,
   isDateValid, setValidDate,
   isNameValid, setValidName
   }){
   const [user, setUser] = useState({});
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userBirthDate, setUserBirthDate] = useState('');
  
   let data;
   
  const now = new Date();

   const handleNameChange = (event) =>{
      setUserName(event.target.value);
      setValidName(false);
   };

   const handleEmailChange = (event) =>{
      setUserEmail(event.target.value);
      setValidEmail(false);
   }

   const handleBirthDateChange = (event) =>{
      setUserBirthDate(event.target.value)
      setValidDate(false);
   }

   const postData = async (data) => {
      let emailData = await axios.post('http://localhost:4000/send-email', data)
      const showdata = await emailData.data;
      setValidEmail(showdata);
      if(showdata === false){
         setUserName('');
         setUserEmail('');
         setUserBirthDate('');
         setModalActive(false);
      }
   }

   
   const handleSubmit = (event) =>{
      event.preventDefault()
      user.name = userName;
      user.birthDate = userBirthDate;
      user.email = userEmail;
      setUser(user);
      data = JSON.stringify(user);
      let userBirthDateISO = new Date(userBirthDate);
      if(userBirthDateISO>now){
         setValidDate(true);
      }else{
         setValidDate(false)
      }
      if(userName===''){
         setValidName(true);
         setModalActive(true);
      }
      if(userEmail===''){
         setValidEmail(true);
         setModalActive(true);
      }
      if(userBirthDateISO<now && userName!=='' && userEmail!==''){
         postData(data);
      };
   }
   
   return(
      <div className={modalActive ? 'modal active' : 'modal'} onClick={()=>setModalActive(false)}>
         <div className="modal-grey"></div>
         <div className="modal-menu-container" onClick={(e)=> e.stopPropagation()}>
            <form className="modal-input-block" onSubmit={handleSubmit}>
               <div className="modal-title">
                  Подпишись на рассылку,
                  чтобы получить скидку 20% на первый заказ
               </div>
               <div className='name-block'>
                  <label className='name-block-title'>Имя</label>
                  <input 
                     className={isNameValid ? 'name-block-input name-valid-true' : 'name-block-input'}
                     type = 'text'
                     value = {userName}
                     onChange={handleNameChange}
                  />
               </div>
               <div className='name-block'>
                  <label className='name-block-title'>Дата рождения</label>
                  <input 
                     className={isDateValid ? 'name-block-input date-valid-true' : 'name-block-input'}
                     type='date'
                     value={userBirthDate}
                     onChange={handleBirthDateChange}
                  />
               </div>
               <div className='name-block'>
                  <label className='name-block-title'>E-mail</label>
                  <input 
                     className={isEmailValid ? 'name-block-input email-valid-true' : 'name-block-input'}
                     type='email'
                     value={userEmail}
                     onChange={handleEmailChange}
                  />
               </div>
               <button className='suscribe-button'>подписаться</button>
            </form>
         </div>
      </div>
   );
};

export default Modal;