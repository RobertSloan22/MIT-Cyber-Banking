import React from 'react';
import { UserContext } from './Context';
import { Card } from './Context';
import Bankingcircle from './bankingcircle.jpg';
import Login from './Login';
import './CreateAccount.css'

function CreateAccount(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const ctx = React.useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    if (label === 'password' && field.length < 8) {
      setStatus('Error: Password should be at least 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password') || password.length < 8) {
      setStatus('Password must be at least 8 characters long');
      setTimeout(() => setStatus(''),3000);
      return;
    }
    ctx.users.push({name,email,password,balance:0});
    setShow(false);
  }

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <div className="grid-container" style={{backgroundImage: `url(${Bankingcircle})`, backgroundSize: 'cover-repeat'}}>
      <div>
        <h3 className="header-text">CyberBank</h3>
      </div>
      <div className="grid-item"> {/* Grid Item 1 */}
        <Card
          bgcolor="primary"
          header="Create Account"
          status={status}
          body={show ? (  // Ternary expression
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} required /><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} required /><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} required /><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!name || !email || !password}>Create Account</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
        />
      </div>
      <div className="grid-item"> {/* Grid Item 2 */}
        <Login />
      </div>
    </div>
  );
}

export default CreateAccount;