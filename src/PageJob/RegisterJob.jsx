import React from 'react'
import {useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const RegisterJob = () => {
    const [job, setJob] = useState("")
    const [earning, setEarning] = useState("")
    const [location, setLocation] = useState("")
    const [companyName, setCompanyName] = useState("")
    const changeJob = (e) =>{
        setJob(e.target.value)
    }
    const changeEarning = (e) =>{
        setEarning(e.target.value)
    }
    const changeLocation = (e) =>{
        setLocation(e.target.value)} 
    const changeCompanyName = (e) =>{
        setCompanyName(e.target.value)
    }
    const register = () =>{
        const data = {
            job,
            earning,
            location,
            companyName
        }
        axios.post("http://localhost:8080/registerjob", data)
        alert("Success")
    }
  return (
    <div className="container">
        <Link to="/"><button type="button" className="btn btn-primary btn-sm">Back</button></Link>
            <div className="mt-3 mb-3">
                <label htmlFor="">Job</label>
                <input type="text" onChange={changeJob} className="form-control form-control-sm"/>
            </div>
            <div className="mt-3 mb-3">
                <label htmlFor="">Earning</label>
                <input type="number" className="form-control form-control-sm" onChange={changeEarning}/>
            </div>
            <div className="mt-3 mb-3">
                <label htmlFor="">Location</label>
                <input type="text" className="form-control form-control-sm" onChange={changeLocation}/>
            </div>
            <div className="mt-3 mb-3">
                <label htmlFor="">Company Name</label>
                <input type="text" className="form-control form-control-sm" onChange={changeCompanyName}/>
            </div>
            <div className="mt-3 mb-3">
                <button type="button" className="btn btn-primary btn-sm" onClick={()=> register()}>Register</button>
            </div>
        </div>
  )
}

export default RegisterJob