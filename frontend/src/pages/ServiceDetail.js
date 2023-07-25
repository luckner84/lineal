import React, { Fragment } from 'react'
import ServiceDetailComponent from '../components/ServiceDetailComponent'
import MetaData from '../components/MetaData'
import SpinLoader from '../UI/SpinLoader'
import { useSelector } from 'react-redux'
import Header from '../UI/Header'
import Footer from '../UI/Footer'
import { Link } from 'react-router-dom'
const ServiceDetail = () => {
    const {loading}=useSelector(state=>state.services)
  return (
    <Fragment>
      <Header/>
      <div className="banner-inner">
	<img src='/images/home1.jpg' style={{height:'300px', width:'100%'}} alt=''/>
	</div>
	<ol className="breadcrumb">
		<li className="breadcrumb-item">
			<Link to="/">Home</Link>
		</li>
		<li className="breadcrumb-item active">Service</li>
	</ol>
        <MetaData title="detail"/>
        {loading && <SpinLoader/>}
        <ServiceDetailComponent/>
        <Footer/>
    </Fragment>
  )
}

export default ServiceDetail