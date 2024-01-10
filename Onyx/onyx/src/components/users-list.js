import '../styles/users-list-styles.scss';
import UserCard from './user-card';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function UsersList () {
   const [userData, setUserData] = useState([])
   const fetchData = async () =>{
      const response = await axios('http://localhost:4000/users-list');
      const responseData = await response.data;
      setUserData(responseData);
   };

   useEffect(()=>{
      fetchData()
   },[]);

   return(
      <div className="main">
         <div className="mainflow">
            <div className="users-list-wrapper">
               {userData.map(user =>{
                  return <UserCard 
                     userName={user.name} 
                     userBDate={user.birthDate} 
                     userEmail={user.email} 
                     key={user.email} 
                  />
               })}
            </div>
         </div>
      </div>
   );
};

export default UsersList;