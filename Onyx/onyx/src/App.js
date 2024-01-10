import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import UsersListPage from './pages/users-list-page';

function App(){
   return (
      <>
         <Routes>
            <Route path="/Onyx-landing" element={<LandingPage/>} />
            <Route path="/users" element={<UsersListPage/>} />
         </Routes>
      </>
   );
};
export default App;