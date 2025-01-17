import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className='flex gap-10 bg-[#F4F9FF]'>

      <div className="bg-primary/10 shadow flex flex-col items-center py-5 w-[360px] min-h-screen">
       
       <NavLink to='/' className=' '>back To Home</NavLink>
       
        <ul className='flex flex-col gap-2 text-[15px]'>
          <NavLink to='profile'>
            <p>Profile</p>
          </NavLink>
          <NavLink to='/dashboard'>
            <p>Add a Camp</p>
          </NavLink>
          <NavLink to='manage-camps'>
            <p>Manage Camps</p>
          </NavLink>
          <NavLink to='manage-registered-camps'>
            <p>Manage Registered Camps</p>
          </NavLink>
          <NavLink to='analytics'>
            <p>Analytics</p>
          </NavLink>
          <NavLink to='registered-camps'>
            <p>Registered Camps 
            </p>
          </NavLink>
          <NavLink to='payment-history'>
            <p>Payment History</p>
          </NavLink>
  
        </ul>
      </div>
      <div className=" w-full">
        <Outlet/>
      </div>

    </div>
  )
}
