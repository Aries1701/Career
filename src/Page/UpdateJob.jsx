// UpdateJob.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateJob = () => {
  const [job, setJob] = useState({
    title: '',
    deadline: '',
    field: '',
    salary: '',
    location: '',
    position: '',
    quantity: '',
    description: ''
  });

  const [fields, setFields] = useState([]);

  useEffect(() => {
    axios.get('/api/fields')
      .then(response => {
        setFields(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setJob({ ...job, [name]: value });
  };

  const handleUpdateJob = (event) => {
    event.preventDefault();
    axios.put('/api/jobs', job)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Cập nhật tin tuyển dụng</h1>
      <form onSubmit={handleUpdateJob}>
        <div>
          <label>Tiêu đề tin:</label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleInputChange}
            maxLength={100}
          />
        </div>
        <div>
          <label>Hạn ứng tuyển:</label>
          <input
            type="datetime-local"
            name="deadline"
            value={job.deadline}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Lĩnh vực:</label>
          <select
            name="field"
            value={job.field}
            onChange={handleInputChange}
          >
            {fields.map((field) => (
              <option key={field.id} value={field.id}>
                {field.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Mức lương:</label>
          <input
            type="text"
            name="salary"
            value={job.salary}
            onChange={handleInputChange}
            maxLength={100}
          />
        </div>
        <div>
          <label>Địa điểm làm việc:</label>
          <input
            type="text"
            name="location"
            value={job.location}
            onChange={handleInputChange}
            maxLength={300}
          />
        </div>
        <div>
          <label>Vị trí việc làm:</label>
          <input
            type="text"
            name="position"
            value={job.position}
            onChange={handleInputChange}
            maxLength={300}
          />
        </div>
        <div>
          <label>Số lượng ứng viên dự kiến:</label>
          <input
            type="number"
            name="quantity"
            value={job.quantity}
            onChange={handleInputChange}
            min={1}
            max={10000}
          />
        </div>
        <div>
          <label>Mô tả bổ sung:</label>
          <textarea
            name="description"
            value={job.description}
            onChange={handleInputChange}
            maxLength={5000}
          />
        </div>
        <button type="submit">Đăng tin</button>
      </form>
    </div>
  );
};

export default UpdateJob;