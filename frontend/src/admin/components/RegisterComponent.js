import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setRegistration } from '../../store/actions/registerAction'
import { useAlert } from 'react-alert'
import {isAlphaValid,isEmailVaild,isPasswordValid} from '../../utils/checkValidation'


const RegisterComponent = () => {

 const {success,error}=useSelector(state=>state.register)

 const [name,setName]=useState("")
 const [email,setEmail]=useState("")
 
 const [password,setPassword]=useState("")
 const [cpassword,setCpassword]=useState("")
 const alert=useAlert()
  const dispatch=useDispatch()
  const navigation=useNavigate()

 const nameHandler=(e)=>{
    setName(e.target.value)
  
 }
 const emailHandler=(e)=>{
  setEmail(e.target.value)
 
  
}
const passwordHandler=(e)=>{
  
  setPassword(e.target.value)
  
}

const cpasswordHandler=(e)=>{
 
  setCpassword(e.target.value)
  
}



useEffect(()=>{
   if(success){
   
    alert.success(success)
    setName('')
    setEmail('')
    setPassword('')
    setCpassword('')
   
    navigation('/login')
   }
 
   if(error){
    alert.error(error)
   
   }
},[alert, error, navigation, success])




  const  onFinish= (event) =>{
    event.preventDefault()
  
     if(!(name && email && password && cpassword)){
      return alert.error("All fields required")
     }else if(!isAlphaValid.test(name)){
      
        return alert.error("Please enter a valid name")
    

     }else if(!isEmailVaild.test(email)){
        return alert.error("Please enter a valid email")
      
     }else if(!isPasswordValid.test(password)){
        return alert.error("Please enter a valid password, at least 8 characters, Uppercase and number")
      
     }else if(!cpassword){
        return alert.error("Comfirm your password")
      
     }else if(cpassword!==password){
        return alert.error("Password does not match")
     }else if(cpassword!==password){
        return alert.error("Password does not match")
     }
     
     else{
      event.preventDefault();
		event.stopPropagation();
		const form=event.currentTarget.elements;
	
		const email=form.email.value;
		const password=form.password.value;
        const cpassword=form.cpassword.value;
        const name=form.name.value;
		const data={email:email,password:password, name:name,cpassword: cpassword}
     
      dispatch(setRegistration(data))
     }
     
   
      
   
  }


 
    
  
  return (
   <Fragment>
    <MetaData title="register"/>
  
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Register Now</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={onFinish}>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Name</label>
       <input type='text'  onChange={nameHandler} value={name}  className='form-control' name="name" />
   

								</div>

								<div className="col-md-6">
                <label htmlFor='email'>Email</label>
       <input type='text'  className='form-control' value={email} onChange={emailHandler} name='email'/>
       
								</div>
                
							</div>

              <div className="form-row">

								<div className="col-md-6">
                 <label htmlFor='password'>Password</label>  
       <input type='password'  className='form-control' value={password} onChange={passwordHandler} name='password' />
      

								</div>

								<div className="col-md-6">
                <label htmlFor='cpassword'>Confirm Password</label>
       <input type='password'  className='form-control' value={cpassword} onChange={cpasswordHandler} name="cpassword"/>
      
								</div>
                
							</div>
        
						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Register</button>
								<br></br>
                        <span><Link to="/login">Click here to Login</Link></span>
						</form>
		
					</div>
			</div>
		</div>
	</section>
   </Fragment>
  )
}

export default RegisterComponent
