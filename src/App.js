import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import { Login } from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/admin/Dashboard';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path='/React-Auth' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute> } />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
