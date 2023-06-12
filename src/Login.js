import React from 'react';
import { UserContext, AuthContext } from './Context';
import { Card } from './Context';
import { useNavigate } from 'react-router-dom';

function Login(){
  const [loginEmail, setLoginEmail] = React.useState('');
  const [loginPassword, setLoginPassword] = React.useState('');
  const [status, setStatus] = React.useState('');

  const ctx = React.useContext(UserContext);  
  const authCtx = React.useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    const user = ctx.users.find(user => user.email === loginEmail && user.password === loginPassword);
    if (user) {
      console.log('Login successful');
      authCtx.setAuthenticated(true);
      navigate('/AllData');
    } else {
      console.log('Login failed');
      setStatus('Login failed');
    }
  }

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={
        <>
          Email address<br/>
          <input type="input" className="form-control" id="loginEmail" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)}/><br/>
          Password<br/>
          <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)}/><br/>
          <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
        </>
      }
    />
  );
}

export default Login;
