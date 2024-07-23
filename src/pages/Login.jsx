import React, { useState } from 'react';
import './pages.css';

let Login = () => {
  let [formData, setFormData] = useState({ username: '', password: '' });
  let [errors, setErrors] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error message if input is valid
    if (errors[name]) {
      let newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  let validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Login form submitted:', formData);
    }
  };

  return (
    <div className='body'>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <div className="error-message">{errors.username}</div>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error-message">{errors.password}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;