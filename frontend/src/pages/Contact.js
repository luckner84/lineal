import React, { Fragment,useEffect} from 'react'
import Footer from '../UI/Footer'
import {Link, useNavigate} from 'react-router-dom'
import Header from '../UI/Header'
import '../utils/contact.css'
import {useSelector,useDispatch} from 'react-redux'
import { getService } from '../store/actions/serviceAction'
import { getCompany } from '../store/actions/companyAction'
import { useAlert } from 'react-alert'
import MetaData from '../components/MetaData'
import SpinLoader from '../UI/SpinLoader'

import {isAlphaValid,isEmailVaild} from '../utils/checkValidation'
import { sendMail } from '../store/actions/mailAction'

const Contact = () => {

	
	const {company}=useSelector(state=>state.companyInfo)
	const dispatch=useDispatch()
    const alert=useAlert()

	const {success,error,loading}=useSelector(state=>state.sendMail)
	
	 const navigation=useNavigate()
   
	
   
   
   
	 const  onSendMail= (event) =>{
	   event.preventDefault()
	   event.stopPropagation();
	   const form=event.currentTarget.elements;
   
	   const email=form.email.value;
	   const name=form.name.value;
	   const subject=form.subject.value;
	   const message=form.message.value;
	   const data={email:email,name:name,subject:subject,message:message}
		document.querySelector("input[name=name]");
		document.querySelector("input[name=email]");
		document.querySelector("input[name=message]");
		document.querySelector("input[name=subject]");
	   if(!isAlphaValid.test(name)){
		 
		   return alert.error("Please enter a valid name")
	   
   
		}
		
		else if(!isEmailVaild.test(email)){
			return alert.error("Please enter a valid email")
		  
		 }
		 else if(!subject){
			return alert.error("Please enter a subject")
		 }
		 else if(!message){
			return alert.error("Please enter your message")
		 }
		 else{
		   dispatch(sendMail(data))
		 }
	   
	  
		
	  
		 
	  
	 }
   
	
   
	 useEffect(()=>{
		if(success){
	  
		 alert.success(success)
		  document.getElementById("name").value=''
		  document.getElementById("email").value=''
		  document.getElementById("message").value=''
		  document.getElementById("subject").value=''
		}
		if(error){
		 alert.error(error)
		
		}
	 },[alert, dispatch, error, navigation, success])


	 

	useEffect(()=>{
		dispatch(getService())
	},[dispatch])
	useEffect(()=>{
		dispatch(getCompany())
	},[dispatch])
  return (
   <Fragment>
    <Header/>
	<MetaData title="contact"/>
     {loading && <SpinLoader/>}
    <div className="banner-inner">
		<img src='images/home1.jpg' style={{height:'300px', width:'100%'}} alt=''/>
	</div>
	<ol className="breadcrumb">
		<li className="breadcrumb-item">
			<Link to="/">Home</Link>
		</li>
		<li className="breadcrumb-item active">Contact</li>
	</ol>

    <section className="main-content">

		<h3 className="tittle">Contact Us</h3>
		<p className="sub text-center">LINEAL CONSTRUCTION</p>
		<div className="contact-map inner-sec">

			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.1767004479802!2d-73.9985669!3d40.603924899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2450933204067%3A0xb79d2b221cd04b2e!2s8621%2020th%20Ave%2C%20Brooklyn%2C%20NY%2011214!5e0!3m2!1sen!2sus!4v1689437954362!5m2!1sen!2sus"
			    className="map" style={{border:"0"}} allowFullScreen=""></iframe>
		</div>
		<div className="ad-inf-sec bg-light">
			<div className="container">
				<div className="address row">

					{
						Array.from(company,(item,idx)=>(
							<Fragment key={idx}>
							<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-4 address-left text-center">
								<i className="far fa-map"></i>
							</div>
							<div className="col-md-8 address-right text-left">
								<h6>Address</h6>
								<p> 
                                 {item.address}
								</p>
							</div>
						</div>

					</div>
					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-4 address-left text-center">
								<i className="far fa-envelope"></i>
							</div>
							<div className="col-md-8 address-right text-left">
								<h6>Email</h6>
								<p>Email :
									{item.email}

								</p>
							</div>

						</div>
					</div>
					<div className="col-lg-4 address-grid">
						<div className="row address-info">
							<div className="col-md-4 address-left text-center">
								<i className="fas fa-mobile-alt"></i>
							</div>
							<div className="col-md-8 address-right text-left">
								<h6>Phone</h6>
								<p>+1 {item.phone}</p>

							</div>

						</div>
					</div>
							</Fragment>
						))
					}


				</div>
			</div>
		</div>
		<div className="container">
			<div className="contact_grid_right">
				<form method="post"  onSubmit={onSendMail}>
					<div className="row contact_left_grid">
						<div className="col-md-6 con-left">
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input className="form-control" type="text" name="name" id="name" placeholder=""/>
							</div>
							<div className="form-group">
								<label htmlFor="email">Email</label>
								<input className="form-control" type="email" name="email" id="email" placeholder=""/>
							</div>
							<div className="form-group">
								<label htmlFor="subject">Subject</label>
								<input className="form-control" type="text" name="subject" id='subject' placeholder=""/>
							</div>
						</div>
						<div className="col-md-6 con-right">
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea  placeholder="" name="message" id="message"></textarea>
							</div>
							<button className='btn btn-primary' type='submit'>Submit</button>

						</div>
					</div>
				</form>
			</div>
		</div>
	</section>
    <Footer/>
   </Fragment>
  )
}

export default Contact