import React from 'react';

const ApplicantList = ({ applicants, onConfirm, onReject }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Số thứ tự</th>
          <th>Tên ứng viên</th>
          <th>Ngày gửi yêu cầu</th>
          <th>Trạng thái yêu cầu</th>
          <th>File đính kèm</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {applicants.map((applicant, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{applicant.name}</td>
            <td>{applicant.requestDate}</td>
            <td>{applicant.status}</td>
            <td>{applicant.file}</td>
            <td>
              <button onClick={() => onConfirm(applicant)}>Xác nhận</button>
              <button onClick={() => onReject(applicant)}>Từ chối</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicantList;