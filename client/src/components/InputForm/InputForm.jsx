import React, { useState } from 'react';

import "./InputForm.scss";

const InputForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="app__input-form">
      <form>
        <div className="app__input-username">
          <p>Name:</p>
          <div className="app__input">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
        </div>
        <div className="app__input-email">
          <p>Email:</p>
          <div className="app__input">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="app__input-phone">
          <p>Phone:</p>
          <div className="app__input">
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>

        </div>
        <div className="app__input-address">
          <p>Address:</p>
          <div className="app__input">
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default InputForm;