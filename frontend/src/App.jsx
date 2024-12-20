import React from 'react'
import Navbar from './components/shared/Navbar.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/auth/Login.jsx';
import Signup from './components/auth/Signup.jsx';
import Home from './components/Home.jsx';
import Jobs from './components/Jobs.jsx';
import Browse from './components/Browse.jsx';
import Profile from './components/Profile.jsx';
import JobDescription from './components/shared/JobDescription.jsx';
import Companies from './components/admin/Companies.jsx';
import CreateCompany from './components/admin/CreateCompany.jsx';
import CompanySetup from './components/admin/CompanySetup.jsx';
import AdminJobs from './components/admin/AdminJobs.jsx';
import { CreateAdminJob } from './components/admin/CreateAdminJob.jsx';
import Applicants from './components/admin/Applicants.jsx';


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  // admin ke liye yha se start hoga
  {
    path:'/admin/companies',
    element:<Companies/>
  },
  {
    path:'/admin/companies/create',
    element:<CreateCompany/>
  },
  {
    path:'/admin/companies/:id',
    element:<CompanySetup/>
  },
  // admin jobs ke liye
  {
    path:'/admin/jobs',
    element:<AdminJobs/>
  },
  {
    path:'/admin/jobs/post',
    element:<CreateAdminJob/>
  },
  {
    path:'/admin/jobs/:id/applicants',
    element:<Applicants/>
  },
 
])

const App = () => {
  return (
    <>
      <RouterProvider router = {appRouter} />
    </>
  )
}

export default App;
