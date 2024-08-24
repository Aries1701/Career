import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const PostJob = () => {
  const [job, setJob] = useState("");
  const [earning, setEarning] = useState("");
  const [location, setLocation] = useState("");
  const [profession, setProfession] = useState("");
  const [position, setPosition] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyImg, setCompanyImg] = useState("");

  const changeJob = (e) => {
    setJob(e.target.value);
  }
  const changeEarning = (e) => {
    setEarning(e.target.value);
  }
  const changeLocation = (e) => {
    setLocation(e.target.value);
  }
  const changeProfession = (e) => {
    setProfession(e.target.value);
  }
  const changePosition = (e) => {
    setPosition(e.target.value);
  }
  const changeNumberPeople = (e) => {
    setNumberPeople(e.target.value);
  }
  const changeDescription = (e) => {
    setDescription(e.target.value);
  }
  const changeDate = (e) => {
    setDate(e.target.value);
  }
  const changeCompanyName = (e) => {
    setCompanyName(e.target.value);
  }
  const changeCompanyImg = (e) => {
    setCompanyImg(e.target.value);
  }
  const registerjob = () => {
    const data = {
      job,
      earning,
      location,
      position,
      description,
      companyName,
      numberPeople,
      profession,
      date,
      companyImg
    }
    axios.post("http://localhost:8080/registerjob", data)
    alert("Success")
  };

  return (
    <div>
      <h1>Đăng tin tuyển dụng</h1>
      <form>
        <div className="form-group mt-3 mb-3">
          <label>Tiêu đề tin:</label>
          <input className="form-control form-control-sm"
            type="text"
            onChange={changeJob}
            maxLength={100}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Tên công ty:</label>
          <input className="form-control form-control-sm"
            type="text"
            onChange={changeCompanyName}
            maxLength={300}
          />
          </div>
          <div className="form-group mt-3 mb-3">
          <label>Ảnh công ty:</label>
          <input className="form-control form-control-sm"
            type="text"
            onChange={changeCompanyImg}
            maxLength={300}
          />
          </div>
        <div className="form-group mt-3 mb-3">
          <label>Hạn ứng tuyển:</label>
          <input className="form-control form-control-sm"
            type="text"
            onChange={changeDate}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Lĩnh vực:</label>
          <Form.Select class="form-select form-select-sm" aria-label="Default select example" size='sm'onChange={changeProfession}>
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
            onChange={changeEarning}
            maxLength={100}
          />
        </div>
          <div className="form-group mt-3 mb-3">
          <label>Địa điểm làm việc:</label>
          <input className="form-control form-control-sm"
            type="text"
            onChange={changeLocation}
            maxLength={300}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Vị trí việc làm:</label>
          <input className="form-control form-control-sm"
            type="text"
            onChange={changePosition}
            maxLength={300}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Số lượng ứng viên dự kiến:</label>
          <input className="form-control form-control-sm"
            type="number"
            onChange={changeNumberPeople}
            min={1}
            max={10000}
          />
        </div>
        <div className="form-group mt-3 mb-3">
          <label>Mô tả bổ sung:</label>
          <textarea className="form-control form-control-sm"
            onChange={changeDescription}
            maxLength={5000}
          />
        </div>
        <button onClick={()=> registerjob()} type="submit">Đăng tin</button>
      </form>
    </div>
  );
};

export default PostJob;