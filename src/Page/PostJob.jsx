import React, { useState } from 'react';
import axios from 'axios';

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
        <div>
          <label>Tiêu đề tin:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={100}
          />
        </div>
        <div>
          <label>Hạn ứng tuyển:</label>
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        </div>
        <div>
          <label>Lĩnh vực:</label>
          <select value={field} onChange={(e) => setField(e.target.value)}>
            <option value="">Chọn lĩnh vực</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <label>Mức lương:</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            maxLength={100}
          />
        </div>
        <div>
          <label>Địa điểm làm việc:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            maxLength={300}
          />
        </div>
        <div>
          <label>Vị trí việc làm:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            maxLength={300}
          />
        </div>
        <div>
          <label>Số lượng ứng viên dự kiến:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min={1}
            max={10000}
          />
        </div>
        <div>
          <label>Mô tả bổ sung:</label>
          <textarea
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