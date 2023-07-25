import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';
import AdminLogin from '../admin/pages/AdminLogin';

const ProtectedRoutesComponent = ({auth}) => {
   const {adminInfo}=useSelector(state=>state.auth)


   if (adminInfo === undefined) return <AdminLogin/>;

   return adminInfo && adminInfo.isAdmin===false && auth? (
        <Navigate to="/login" />
   ) : adminInfo && adminInfo.isAdmin && auth? (
       <Outlet />
   ) : adminInfo && !adminInfo.isAdmin && !auth? (
       <>
      
       <Outlet />
       </>
   ) : (
        <Navigate to="/login" />
   )


}

export default ProtectedRoutesComponent