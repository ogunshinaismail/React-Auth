import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import { Login } from './components/Login';
import SignUp from './components/SignUp';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Admin from './components/admin/Admin';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <div className="App">  
      <UserAuthContextProvider>
        <Routes>
          <Route path='/React-Auth' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/admin/*' element={<ProtectedRoute> <Admin /> </ProtectedRoute> } />
           <Route path="*" element={<NotFound />} />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
