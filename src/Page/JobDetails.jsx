import React from 'react';

const JobDetail = ({ job }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>Ngày đăng tin: {job.postedDate}</p>
      <p>Hạn ứng tuyển: {job.deadline}</p>
      <p>Lĩnh vực tuyển dụng: {job.field}</p>
      <p>Mức lương: {job.salary}</p>
      <p>Địa điểm làm việc: {job.location}</p>
      <p>Vị trí việc làm: {job.position}</p>
      <p>Số lượng ứng viên: {job.applicantCount}</p>
      <p>Mô tả: {job.description}</p>
    </div>
  );
};

export default JobDetail;