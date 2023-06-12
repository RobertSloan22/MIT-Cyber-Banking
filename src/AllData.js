import React from "react";
import {UserContext} from "./Context";


function AllData(){
  const ctx = React.useContext(UserContext);

  return (
    <>
    <h5>All Account Data</h5>
    {ctx.users.map((user, index) => (
      <div key={index} className="card mt-4">
        <div className="card-body">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{user.name}</h5>
            <small>{user.email}</small>
          </div>
          <p className="mb-1">Balance: {user.balance}</p>
        </div>
      </div>
    ))}
    </>
    
  );
}

export default AllData;
