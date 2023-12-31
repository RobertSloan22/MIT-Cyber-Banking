import React from 'react';
import { Link } from 'react-router-dom';
import CustomTooltip from './CustomTooltip';
import { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap'; // Importing Bootstrap components

function NavBar(){

    const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDateTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
  return(
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/Home/">CyberBank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <CustomTooltip tooltipText="Banking in Cyber-Space">
              <Nav.Link as={Link} to="/Home/">CyberBank Home Page</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Become a CyberBank Account Holder">
              <Nav.Link as={Link} to="/CreateAccount/">Create Account</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Make A deposit into your account">
              <Nav.Link as={Link} to="/Deposit/">Deposit</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Make a Withdraw">
              <Nav.Link as={Link} to="/Withdraw/">Withdraw</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="View your Transaction History ">
              <Nav.Link as={Link} to="/AllData/">AllData</Nav.Link>
            </CustomTooltip>
          </Nav.Item>         
          <Nav.Item>
            <Nav.Link className="font-weight-bold text-align-right" disabled>{currentDateTime.toLocaleString()}</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <CustomTooltip tooltipText="Login to your Account">
              <Nav.Link as={Link} to="/Login/">Login to Account</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
          <Nav.Item>
            <CustomTooltip tooltipText="Logout from your account">
              <Nav.Link as={Link} to="/Logout/">Logout</Nav.Link>
            </CustomTooltip>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;
