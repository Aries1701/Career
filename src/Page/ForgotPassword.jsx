import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css'

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to reset password
    console.log(`Reset password for ${email}`);
  };

  return (
    <div className="container">
      <h1 className="title">Quên mật khẩu</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email
            <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
       <div className='button'>
       <button type="submit">
          Tạo lại mật khẩu
        </button>
       </div>
        <div className="links">
        <div>
        <Link to="/signin" className="link">
          Đăng ký tài khoản mới
        </Link>
        </div>
        <div>
        <Link to="/login" className="link">
          Quay lại đăng nhập
        </Link>
        </div>
      </div>
      </form>
      <p className="note">
        Bạn gặp khó khăn khi tạo tài khoản? Vui lòng gọi tới số
        (024) 6680 5588 (giờ hành chính).
      </p>
    </div>
  );
}

export default ForgotPassword;