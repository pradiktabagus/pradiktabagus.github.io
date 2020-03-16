import React from 'react';
import 'bulma/css/bulma.css';
export default function RegisterPage() {
  return (
    <div className="container-auth">
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Full Name" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Username" />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <input className="input" type="password" placeholder="Password" />
        </div>
      </div>
      <button className="btn-auth">Register</button>
    </div>
  );
}
