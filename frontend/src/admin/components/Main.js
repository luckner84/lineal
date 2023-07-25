import React, { Fragment } from 'react'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
import ProfileComponent from './ProfileComponent'

const Main = () => {
  return (
  <Fragment>
    <AdminHeader/>
    <ProfileComponent/>
    <Footer/>
  </Fragment>
  )
}

export default Main
