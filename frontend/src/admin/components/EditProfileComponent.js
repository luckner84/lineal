import React, { Fragment, useEffect} from 'react'
import MetaData from './MetaData'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editAdminInfo, getAdminDetail} from '../../store/actions/registerAction'
import { useAlert } from 'react-alert'
import {isAlphaValid,isEmailVaild} from '../../utils/checkValidation'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
import SpinLoader from '../../UI/SpinLoader'
const EditProfileComponent = () => {
    const {user}=useSelector(state=>state.detail)
 const {success,error,loading}=useSelector(state=>state.edit)
 
 const params=useParams()
const {userId}=params
 const alert=useAlert()
  const dispatch=useDispatch()
  const navigation=useNavigate()

 



  const  onFinish= (event) =>{
    event.preventDefault()

    event.preventDefault();
    event.stopPropagation();
    const form=event.currentTarget.elements;

    const email=form.email.value;
    const name=form.name.value;
    const data={email:email,name:name}
     document.querySelector("input[name=name]");
     document.querySelector("input[name=email]");
    if(!isAlphaValid.test(name)){
      
        return alert.error("Please enter a valid name")
    

     }
     
     else if(!isEmailVaild.test(email)){
         return alert.error("Please enter a valid email")
       
      }else{
        dispatch(editAdminInfo(userId,data))
      }
    
   
     
   
      
   
  }

  useEffect(()=>{
    dispatch(getAdminDetail(userId))
  },[dispatch, userId])

  useEffect(()=>{
     if(success){
   
      alert.success(success)
     
        setTimeout(()=>{window.location.reload();},1000)
     }
     if(error){
      alert.error(error)
     
     }
  },[alert, dispatch, error, navigation, success])
    
  
  return (
   <Fragment>
    <AdminHeader/>
    <MetaData title="profile"/>
    {loading && <SpinLoader/>}
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Profile</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={onFinish}>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Name</label>
       <input type='text'   defaultValue={user.name}  className='form-control'  name="name" />
   

								</div>

								<div className="col-md-6">
                <label htmlFor='email'>Email</label>
       <input type='text'  className='form-control' defaultValue={user.email}  name='email'/>
       
								</div>
                
							</div>

     
						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Save </button>
                            <br></br>
								<Link to="/admin">Back to Profile</Link>
						</form>
		
					</div>
			</div>
		</div>
	</section>
  <Footer/>
   </Fragment>
  )
}

export default EditProfileComponent
