import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "../JobList/JobList.css"
import { Link } from "react-router-dom";
const JobList = (props) => {
    const currentPage2 = props.currentPage2;
    const [listJob, setListJob] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [listTotalPage, setListTotalPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    let listTotalPage2 = [];

    let navigate = useNavigate();
    
    useEffect(() => {
        console.log(7)
        const fetchData = async () => {
            let result = null;
            if (currentPage2 != null) {
                result = await axios.get("http://localhost:8080/joblist?currentPage=" + currentPage2);
            } else {
                result = await axios.get("http://localhost:8080/joblist");
            }
            setListJob(result.data.job);
            setTotalPage(result.data.totalPage);
            setCurrentPage(result.data.currentPage);

            let listTotalPageTmp = [];
            for (let i = 0; i < totalPage; i++) {
                listTotalPageTmp.push(i + 1);
            }
            setListTotalPage(listTotalPageTmp);
        }

        fetchData();
    }, []);
    
console.log("currentPage")
console.log(currentPage)
    const next = () => {
        let nextPage = currentPage + 1;
        window.location.href = "http://localhost:5173/joblist?currentPage=" + nextPage;
    }
    const previous = () => {
        let prePage = currentPage - 1;
        window.location.href = "http://localhost:5173/joblist?currentPage=" + prePage;
    }

    return (
        <div className="container">
            <div>
                <div className="list-group">
                    {
                        listJob.map((value, i) => {
                            return (
                                <div className="container-list" key={i}>
                                    <Link to={`/jobdetails/${value._id}`} key={value.id}>
                                    <div className="list-job">
                                    <div className="title-job">
                                    <img src={value.companyImg} alt="" />
                                    <div>
                                    <h4>{value.job}</h4>
                                    <h5>{value.companyName}</h5>
                                    </div>
                                    </div>
                                    <div>
                                    <p>Yêu cầu: {value.description}</p>
                                    <p>Hạn ứng tuyển: {value.date}</p>
                                    </div>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default JobList;