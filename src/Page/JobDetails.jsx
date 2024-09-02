import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./JobDetails.css"
const JobDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState()
  console.log("id");

  console.log(id);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(`http://localhost:8080/jobdetails/${id}`)
      setData(response.data)
      console.log(response);

    }
    fetchdata()
  }, [])

  return (
    <div>
      <div className='detail-page'>
        <div className='top-detail'>
          <div className='title-detail'>
            <h2>{data?.job}</h2>
            <div className='title-container'>
              <p><i class="fa-solid fa-coins"></i> Mức lương: {data?.earning}</p>
              <p><i class="fa-solid fa-location-dot"></i> Địa điểm làm việc: {data?.location}</p>
            </div>
            <div className='date'>
              <p><i class="fa-solid fa-clock"></i> Hạn ứng tuyển: {data?.date}</p>
            </div>
            <button className='btn-plane'><i class="fa-regular fa-paper-plane"></i> Ứng tuyển ngay</button>
            <button><i class="fa-regular fa-heart"></i> Lưu tin</button>
          </div>
          <div className='info-container'>
            <div className='company-info'>
              <img src={data?.companyImg} alt="" />
              <h4>{data?.companyName}</h4>
            </div>
            <div className='detail-info'>
              <p>Quy mô:</p>
              <h5>{data?.numberPeople}</h5>
            </div>
            <div className='detail-info'>
              <p>Lĩnh vực:</p>
              <h5>{data?.position}</h5>
            </div>
            <div className='detail-info'>
              <p>Địa điểm:</p>
              <h5>{data?.location}</h5>
            </div>
          </div>
        </div>
        <div className='bot-detail'>
        <div className='detail'>
          <h2>Chi tiết tuyển dụng</h2>
          <h5>Mô tả công việc</h5>
          <p>{data?.description}</p>
        </div>
        <div className='more-info'>
          <h4>Thông tin chung</h4>
        </div>
        </div>
      </div>

    </div>
  );
};

export default JobDetail;