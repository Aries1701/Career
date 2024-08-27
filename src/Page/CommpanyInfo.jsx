import React, { useState } from 'react';

function CommpanyInfo() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Industry:', industry);
  };

  return (
    <div className="container">
      <h1>Cài đặt thông tin doanh nghiệp</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên doanh nghiệp <span className="required">*</span></label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Số điện thoại</label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="industry">Ngành nghề</label>
          <select
            className="form-control"
            id="industry"
            value={industry}
            onChange={(event) => setIndustry(event.target.value)}
          >
            <option value="">Chọn ngành nghề</option>
            <option value="Công nghệ thông tin">Công nghệ thông tin</option>
            <option value="Kinh doanh">Kinh doanh</option>
            <option value="Sản xuất">Sản xuất</option>
            <option value="Dịch vụ">Dịch vụ</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Lưu</button>
      </form>
    </div>
  );
}

export default CommpanyInfo;