import '../styles/user-card-styles.scss';

function UserCard ({userName, userBDate, userEmail}) {
   return(
      <div className="user-card-wrapper">
         <div className='user-name'>{userName}</div>
         <div className='user-bdate'>{userBDate}</div>
         <div className='user-email'>{userEmail}</div>
      </div>
   );
};

export default UserCard;