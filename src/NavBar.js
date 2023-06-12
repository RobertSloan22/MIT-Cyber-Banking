import React from 'react';
import { Link } from 'react-router-dom';
import CustomTooltip from './CustomTooltip';

function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">CyberBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
            <CustomTooltip tooltipText="Banking in Cyber-Space">
              <Link className="nav-link" to="/Home/">CyberBank Home Page</Link>
            </CustomTooltip>
          </li>
          <li className="nav-item">
            <CustomTooltip tooltipText="Become a CyberBank Account Holder">
              <Link className="nav-link" to="/CreateAccount/">Create Account</Link>
            </CustomTooltip>
          </li>
          <li className="nav-item">
            <CustomTooltip tooltipText="Make A deposit into your account">
              <Link className="nav-link" to="/Deposit/">Deposit</Link>
            </CustomTooltip>
          </li>
          <li className="nav-item">
            <CustomTooltip tooltipText="Make a Withdraw">
              <Link className="nav-link" to="/Withdraw/">Withdraw</Link>
            </CustomTooltip>
          </li>
          <li className="nav-item">
            <CustomTooltip tooltipText="View your Transaction History ">
              <Link className="nav-link" to="/AllData/">AllData</Link>
            </CustomTooltip>
          </li>          
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <CustomTooltip tooltipText="Login to your Account">
              <Link className="nav-link" to="/Logout/">Login to Account</Link>
            </CustomTooltip>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <CustomTooltip tooltipText="Logout from your account">
              <Link className="nav-link" to="/Logout/">Logout</Link>
            </CustomTooltip>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default NavBar;
