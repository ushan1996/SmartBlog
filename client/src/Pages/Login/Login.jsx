import './login.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import axios from 'axios';
export default function Login() {
  const userRef = useRef();
  const passowrdRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passowrdRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {}
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter Your Username ....."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter Your password ....."
          ref={passowrdRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          LOGIN
        </button>
        <button className="loginRegistrationButton">
          <Link to="/register" className="link">
            REGISTER
          </Link>
        </button>
      </form>
    </div>
  );
}
