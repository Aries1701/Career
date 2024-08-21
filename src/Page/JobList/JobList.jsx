import {useEffect, useState} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';


const JobList = (props) => {
    const currentPage2 = props.currentPage2;
    console.log("currentPage2")
    console.log(currentPage2)

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
                result = await axios.get("http://localhost:8080/job?currentPage=" + currentPage2);
            } else {
                result = await axios.get("http://localhost:8080/job");
            }

            console.log("result")
            console.log(result)
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

    const next = () => {
        let nextPage = currentPage + 1;
        window.location.href = "http://localhost:5173/jobList?currentPage=" + nextPage;
    }
    const previous = () => {
        let prePage = currentPage - 1;
        window.location.href = "http://localhost:5173/jobList?currentPage=" + prePage;
    }

    return (
        <div className="container">
            <div>
                <nav id="nav-bar" className="navbar navbar-expand-lg bg-body-tertiary">
                    <h4>Jobs</h4>
                    </nav>
                <div className="list-group">
                    {
                        listJob.map((value, i) => {
                            return (
                                <div key={i}>
                                    <Card style={{ width: '200px', height:'425px' }}>
                                        {/* <Card.Img style={{width:'199px', height:'300px'}} variant="top" src={value.image} /> */}
                                        <Card.Body>
                                            <Card.Title>{value.job}</Card.Title>
                                            <Card.Text>
                                                {value.job}p {value.date}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <ul className="pagination pagination-sm">
                <li className="page-item"><button className="page-link" onClick={() => previous()}>Previous</button></li>
                <li className="page-item"><button className="page-link" onClick={() => next()}>Next</button></li>
            </ul>
        </div>
    )
}

export default JobList;