import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';

const UpdatePersonalInfo = () => {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [fieldsOfActivity, setFieldsOfActivity] = useState([]);
  const [selfDescription, setSelfDescription] = useState('');
  const [error, setError] = useState(null);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleFieldsOfActivityChange = (e) => {
    setFieldsOfActivity(Array.from(e.target.selectedOptions, (option) => option.value));
  };

  const handleSelfDescriptionChange = (e) => {
    setSelfDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName ||!age ||!gender ||!phoneNumber ||!address ||!fieldsOfActivity ||!selfDescription) {
      setError('Please fill in all fields');
      return;
    }
    if (age < 18 || age > 100) {
      setError('Age must be between 18 and 100');
      return;
    }
    if (!phoneNumber.match(/^0[0-9]{9,10}$/)) {
      setError('Invalid phone number');
      return;
    }
    console.log('Update personal information API call');
  };

  return (
    <div>
      <h1>Update Personal Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3 mb-3">
          <label>Họ và tên *</label>
          <input className="form-control form-control-sm" type="text" value={fullName} onChange={handleFullNameChange} required maxLength={100} />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Tuổi *</label>
          <input className="form-control form-control-sm" type="number" value={age} onChange={handleAgeChange} required min={18} max={100} />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Giới tính *</label>
          <Form.Select class="form-select form-select-sm" aria-label="Default select example" size='sm'>
      <option value="1">Nam</option>
      <option value="2">Nữ</option>
    </Form.Select>
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Email *</label>
          <input className="form-control form-control-sm" type="email" value={email} disabled />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Số điện thoại *</label>
          <input className="form-control form-control-sm" type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} required />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Địa chỉ *</label>
          <input className="form-control form-control-sm" type="text" value={address} onChange={handleAddressChange} required maxLength={200} />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Lĩnh vực hoạt động *</label>

          <Form.Select class="form-select form-select-sm" size='sm' aria-label="Default select example" onChange={handleFieldsOfActivityChange} required>
          {fieldsOfActivityOptions.map((option) => (
              <option key={option.value}>
                <li>{option.label}</li>
              </option>
            ))}
    </Form.Select>
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Mô tả bản thân *</label>
          <textarea className="form-control form-control-sm" value={selfDescription} onChange={handleSelfDescriptionChange} required maxLength={1000} />
        </div>
        {error && <div className="error">{error}</div>}
        <button className="btn btn-primary btn-sm" type="submit">Done</button>
      </form>
    </div>
  );
};

const fieldsOfActivityOptions = [
  { value: 'IT', label: 'IT' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Finance', label: 'Finance' },
  // thêm option
];

export default UpdatePersonalInfo;