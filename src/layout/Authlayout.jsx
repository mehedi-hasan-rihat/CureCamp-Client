import React from 'react'
import Navbar from '../component/sharedComponent/Navbar'
import { Outlet } from 'react-router-dom'

export default function Authlayout() {
  return (
    <div>
        <div className="border-b border-slate-100 sticky top-0 z-50 bg-[#F4F9FF]">
              <div className="bg-[#6C63FF] text-white"> <Navbar /></div>
             </div>
        <Outlet/>
    </div>
  )
}
