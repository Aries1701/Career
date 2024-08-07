import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [field, setField] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [position, setPosition] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/jobs', {
        title,
        deadline,
        field,
        salary,
        location,
        position,
        quantity,
        description,
      });
      console.log(response.data);
      alert('Đã đăng tin tuyển dụng');
      // Quay trở lại màn hình danh sách tin tuyển dụng
      window.location.href = '/jobs';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Đăng tin tuyển dụng</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3 mb-3">
          <label>Tiêu đề tin:</label>
          <input className="form-control form-control-sm"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Hạn ứng tuyển:</label>
          <input className="form-control form-control-sm"
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Lĩnh vực:</label>
          <Form.Select class="form-select form-select-sm" aria-label="Default select example" size='sm' value={field} onChange={(e) => setField(e.target.value)}>
            <option value="">Chọn lĩnh vực</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </Form.Select>
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Mức lương:</label>
          <input className="form-control form-control-sm"
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Địa điểm làm việc:</label>
          <input className="form-control form-control-sm"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            maxLength={300}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Vị trí việc làm:</label>
          <input className="form-control form-control-sm"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            maxLength={300}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Số lượng ứng viên dự kiến:</label>
          <input className="form-control form-control-sm"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min={1}
            max={10000}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Mô tả bổ sung:</label>
          <textarea className="form-control form-control-sm"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={5000}
          />
        </div>
        <button type="submit">Đăng tin</button>
      </form>
    </div>
  );
};

export default PostJob;