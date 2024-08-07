import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
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
        <div className='ctn'>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" onChange={changeUsername} className="form-control" id="username" placeholder="Username" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" onChange={changePassword} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Email" onChange={changeEmail} />
            </div>
            <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" className="form-control" id="fullName" placeholder="Full Name" onChange={changeFullName} />
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={() => register()}>Register</button>
            </div>
        </div>    
        </div>
    )
}

export default Signin