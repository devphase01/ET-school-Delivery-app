import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setName, setEmail, setPhone, setAddress } from '../../app/reducers/UserOrder';

import "./InputForm.scss";

const InputForm = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.order);

  return (
    <div className="app__input-form">
      <form>
        <div className="app__input-username">
          <p>Name:</p>
          <div className="app__input">
            <input type="text" value={userInfo.name} onChange={(e) => dispatch(setName(e.target.value))} />
          </div>
        </div>
        <div className="app__input-email">
          <p>Email:</p>
          <div className="app__input">
            <input type="email" value={userInfo.email} onChange={(e) => dispatch(setEmail(e.target.value))} />
          </div>
        </div>
        <div className="app__input-phone">
          <p>Phone:</p>
          <div className="app__input">
            <input type="text" value={userInfo.phone} onChange={(e) => dispatch(setPhone(e.target.value))} />
          </div>

        </div>
        <div className="app__input-address">
          <p>Address:</p>
          <div className="app__input">
            <input type="text" value={userInfo.address} onChange={(e) => dispatch(setAddress(e.target.value))} />
          </div>
        </div>
      </form>
    </div>
  )
}

export default InputForm;