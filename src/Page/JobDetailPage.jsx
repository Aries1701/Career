import React from 'react';
import JobDetail from './JobDetail';
import ApplicantList from './ApplicantList';

const JobDetailPage = ({ job, applicants, onConfirm, onReject }) => {
  return (
    <div>
      <JobDetail job={job} />
      <ApplicantList applicants={applicants} onConfirm={onConfirm} onReject={onReject} />
    </div>
  );
};

export default JobDetailPage;