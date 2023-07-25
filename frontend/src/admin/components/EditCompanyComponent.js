import React ,{Fragment} from 'react'
import MetaData from './MetaData'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { EditCompany, getcompanyDetail } from '../../store/actions/companyAction'
import {isAlphaValid,isEmailVaild,isPhoneValid} from '../../utils/checkValidation'
import { useAlert } from 'react-alert'
import SpinLoader from '../../UI/SpinLoader'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
const EditCompanyComponent = () => {
 const dispatch=useDispatch()
 const params=useParams()
 const {compId}=params
const navigation=useNavigate()
 const {success,error,loading}=useSelector(state=>state.companyInfo)
 const {companyDetail}=useSelector(state=>state.compDetail)
const alert=useAlert()
  const submitHandler=(event)=>{
	
    event.preventDefault();
    event.stopPropagation();
    const form=event.currentTarget.elements;

    const email=form.email.value;
    const name=form.name.value;
	const phone=form.phone.value;
	const address=form.address.value;
	const description=form.description.value;
    const data={email,name,phone,address,description}
    
	if(!(name && email && phone && address && description)){
		return alert.error("All fields required")
	   }else if(!isAlphaValid.test(name)){
		
		  return alert.error("Please enter a valid name")
	  
  
	   }else if(!isEmailVaild.test(email)){
		  return alert.error("Please enter a valid email")
		
	   }else if(!isPhoneValid.test(phone)){
		  return alert.error("Please enter a valid phone number 000-000-0000")
		
	   }else if(!address){
		  return alert.error("Please enter your address")
		
	   }else if(!description){
		  return alert.error("Please enter company description")
	   }else{
		if(data){
          dispatch(EditCompany(compId,data))
		  setTimeout(()=>{ navigation('/admin/company')},2000)
		}
	   }
	 
    
  }

  useEffect(()=>{
	dispatch(getcompanyDetail(compId))
  },[compId, dispatch])

  useEffect(()=>{
	if(success){
	
	 alert.success(success)
	 setTimeout(()=>{window.location.reload();},2000)
	}
  
	if(error){
	 alert.error(error)
   
	}
 },[alert, error, navigation, success, dispatch])

  return (
    <Fragment>
		<AdminHeader/>
    <MetaData title="edit-company"/>
     {loading && <SpinLoader/>}
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Edit Company</h3>
			
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={submitHandler}>
	
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Name</label>
       <input type='text'  defaultValue={companyDetail.name}  id="name" className='form-control' name="name" />
   

								</div>

								<div className="col-md-6">
                <label htmlFor='email'>Email</label>
       <input type='text' defaultValue={companyDetail.email} id='email'  className='form-control'  name='email'/>
       
								</div>
                
							</div>

              <div className="form-row">

								<div className="col-md-6">
                 <label htmlFor='phone'>Phone</label>  
       <input type='text' defaultValue={companyDetail.phone} id='phone' className='form-control' name='phone' />
      

								</div>

								<div className="col-md-6">
                <label htmlFor='address'>Address</label>
       <input type='text' defaultValue={companyDetail.address} id='address'  className='form-control' name="address"/>
      
								</div>
                
							</div>

      
<div  className="form-row"> 
<div className='col-md-6'>

<label htmlFor='description'>Description</label>
<textarea defaultValue={companyDetail.description} id='description' className='form-control' rows="10" name='description'></textarea>
</div>
</div>
        
						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Save Company</button>
								<br></br>
                        <span><Link to="/admin/company">Click here to back home</Link></span>
						</form>
		
					</div>
			</div>
		</div>
	</section>
	<Footer/>
   </Fragment>
  )
}

export default EditCompanyComponent
