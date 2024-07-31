import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
// import '../App.css'
import './Signin.css'
const Signin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const changeFullName = (e) => {
        setFullName(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    const register = () => {
        const data = {
            username,
            password,
            email,
            fullName
        }
        axios.post("http://localhost:8080/register", data)

    }
    return (
        <div className="container">
            <div className='a'>
            <div className="mt-3 mb-3">
                <label htmlFor="">Username</label>
                <input type="text" onChange={changeUsername} className="form-control form-control-sm" />
            </div>
            <div className="mt-3 mb-3">
                <label htmlFor="">Password</label>
                <input type="password" className="form-control form-control-sm" onChange={changePassword} />
            </div>
            <div className="mt-3 mb-3">
                <label htmlFor="">Email</label>
                <input type="email" className="form-control form-control-sm" onChange={changeEmail} />
            </div>
            <div className="mt-3 mb-3">
                <label htmlFor="">Full Name</label>
                <input type="text" className="form-control form-control-sm" onChange={changeFullName} />
            </div>
            <div id='button-signlog' className="mt-3 mb-3">
                <button type="button" className="btn btn-primary btn-sm" onClick={() => register()}>Register</button>
            </div>
            </div>
        </div>
    )
}

export default Signin
