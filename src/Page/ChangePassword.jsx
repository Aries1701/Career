import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleOldPasswordChange = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPassword ||!newPassword ||!confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (newPassword!== confirmPassword) {
      setError('New password and confirm password do not match');
      return;
    }
    if (!validatePassword(newPassword)) {
      setError('New password does not meet the requirements');
      return;
    }
  }
    const changePass = () =>{
      const data = {
          username,
          newPassword
      }
      axios.post("http://localhost:8080/changepassword", data)
      alert("Change password success")
    }
  

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  return (
    <div>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3 mb-3">
          <label>Old password *</label>
          <input className="form-control form-control-sm" type="password" value={oldPassword} onChange={handleOldPasswordChange} required />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>New password *</label>
          <input className="form-control form-control-sm" type="password" value={newPassword} onChange={handleNewPasswordChange} required />
          <small>(Tối thiểu 8 ký tự, tối thiểu 1 chữ số, 1 ký tự đặc biệt, 1 chữ hoa, 1 chữ thường)</small>
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Confirm password *</label>
          <input className="form-control form-control-sm" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="btn btn-primary btn-sm" type="submit" onClick={()=> changePass()}>Change Password</button>
      </form>
    </div>
  );
  };

export default ChangePassword;