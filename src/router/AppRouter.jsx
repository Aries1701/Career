import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Signin from '../Page/Signin'
import Login from '../Page/Login'
import ForgotPassword from '../Page/ForgotPassword'
import ChangePassword from '../Page/ChangePassword'
import UpdatePersonalInfo from '../Page/UpdatePersonalInfo'
import Home from '../Page/Home'
import UpdateCompanyInfo from '../Page/UpdateCompanyInfo'
import JobDetails from '../Page/JobDetails'
import Job from '../Page/Job'
import PostJob from '../Page/PostJob'
import UpdateJob from '../Page/UpdateJob'




const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/changepassword" element={<ChangePassword/>}/>
        <Route path="/updatepersonalinfo" element={<UpdatePersonalInfo/>}/>
        <Route path="/updatecompanyinfo" element={<UpdateCompanyInfo/>}/>
        <Route path="/jobdetails" element={<JobDetails/>}/>
        <Route path="/job" element={<Job/>}/>
        <Route path="/postjob" element={<PostJob/>}/>
        <Route path="/updatejob" element={<UpdateJob/>}/>

      </Routes>

    </div>
  )
}

export default AppRouter