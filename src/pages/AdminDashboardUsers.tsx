import React from 'react'
import AdminHeader from '../components/Layout/AdminHeader.tsx'
import AdminSideBar from '../components/Admin/Layout/AdminSideBar'
import AllUsers from "../components/Admin/AllUsers.tsx";
import { getAllUsers } from '../redux/actions/user.tsx';

const AdminDashboardUsers = () => {
  return (
    <div>
    <AdminHeader />
    <div className="w-full flex">
      <div className="flex items-start justify-between w-full">
        <div className="w-[80px] 800px:w-[330px]">
          <AdminSideBar active={4} />
        </div>
        <AllUsers getAllUsers={getAllUsers}/>
      </div>
    </div>
  </div>
  )
}

export default AdminDashboardUsers