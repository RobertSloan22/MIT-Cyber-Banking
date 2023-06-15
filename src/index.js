import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './AuthProvider';
import { UserProvider } from './Context';
import { BalanceProvider } from './BalanceContext'; // Import BalanceProvider
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';

ReactDOM.render(
  <HashRouter>
  <AuthProvider>
    <NavBar/>
    <UserProvider> {/* Use UserProvider instead of UserContext.Provider */}
      <BalanceProvider>  {/* Wrap your Routes in BalanceProvider */}
        <div className="container" style={{padding: "20px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home/" element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/Deposit/" element={<Deposit />} />
            <Route path="/Withdraw/" element={<Withdraw />} />
            <Route path="/AllData/" element={<AllData />} />
            <Route path="/Login/" element={<Login />} />
          </Routes>
        </div>
      </BalanceProvider>
    </UserProvider> 
  </AuthProvider>     
</HashRouter>,
  document.getElementById('root')
);