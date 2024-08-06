import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const changeUsername = (e) => {
        setUsername(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }
    const register = () => {
        const data = {
            username,
            password
        }
        axios.post("http://localhost:8080/login", data)
    }
    return (
        <div className='a'>
            <div className="">
                <div className="mt-3 mb-3">
                    <label htmlFor="">Username</label>
                    <input type="text" onChange={changeUsername} className="form-control form-control-sm" />
                </div>
                <div className="mt-3 mb-3">
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control form-control-sm" onChange={changePassword} />
                </div>
                <div id='button-signlog' className="mt-3 mb-3">
                    <button type="button" className="btn btn-primary btn-sm" onClick={() => register()}>Login</button>
                </div>
                <div className='forgot-update'>
                <Stack gap={2}>
                <div className="p-2"><Link to="/forgotpassword"><label htmlFor="">Forgot Password</label></Link></div>
                <div className="p-2"><Link to="/updatepersonalinfo"><label htmlFor="">Update Personal Info</label></Link></div>
                <div className="p-2"><Link to="/updatecompanyinfo"><label htmlFor="">Update Company Info</label></Link></div>
                <div className="p-2"><Link to="/jobdetails"><label htmlFor="">Job Details</label></Link></div>
                <div className="p-2"><Link to="/job"><label htmlFor="">Job</label></Link></div>
                <div className="p-2"><Link to="/postjob"><label htmlFor="">Post Job</label></Link></div>
                <div className="p-2"><Link to="/updatejob"><label htmlFor="">Update Job</label></Link></div>
                </Stack>
                </div>
            </div>        
        </div>    
        
    )
}

export default Login