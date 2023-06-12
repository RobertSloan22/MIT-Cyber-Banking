import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './AuthProvider';
import { UserContext } from './Context';
import { BalanceProvider } from './BalanceContext'; // Import BalanceProvider
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <HashRouter>
    <AuthProvider>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Robert Sloan',email:'rstechsolutionsmeco@gmail.com',password:'MIT',balance:500}]}}>
        <BalanceProvider>  {/* Wrap your Routes in BalanceProvider */}
          <div className="container" style={{padding: "20px"}}>
            <Routes>
              <Route path="#/" element={<Home />} />
              <Route path="/Home/" element={<Home />} />
              <Route path="/CreateAccount/" element={<CreateAccount />} />
              <Route path="/Deposit/" element={<Deposit />} />
              <Route path="/Withdraw/" element={<Withdraw />} />
              <Route path="/AllData/" element={<AllData />} />
            </Routes>
          </div>
        </BalanceProvider>
      </UserContext.Provider> 
    </AuthProvider>     
  </HashRouter>,
  document.getElementById('root')
);
