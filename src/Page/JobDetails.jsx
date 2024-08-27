import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { jobId } = useParams();
  const [value, setJob] = useState({});

  useEffect(() => {
    const fetchJob = async () => {
      const result = await axios.get(`http://localhost:8080/job/${jobId}`);
      setJob(result.data);
    };
    fetchJob();
  }, [jobId]);

  return (
    <div>
      <h2>{value.job} {value.profession}</h2>
      <p>Company: {value.companyName}</p>
      <p>Description: {value.description}</p>
      <p>Date: {value.date}</p>
    </div>
  );
};

export default JobDetail;