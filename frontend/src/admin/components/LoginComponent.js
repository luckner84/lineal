import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './MetaData'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import {isEmailVaild,isPasswordValid} from '../../utils/checkValidation'
import { setLogin } from '../../store/actions/loginAction'

const LoginComponent = () => {


    const alert=useAlert()
    const dispatch=useDispatch()
    const navigation=useNavigate()

    const {success,error,  authenticate, adminInfo}=useSelector(state=>state.auth)

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
   
    
   
   
    
    const emailHandler=(e)=>{
     setEmail(e.target.value)
    
     
   }
   const passwordHandler=(e)=>{
     
     setPassword(e.target.value)
     
   }
   
   
   
 
   useEffect(()=>{
    if(success && authenticate){ alert.success(success)     
      setEmail('')
    setPassword('')}
    if(error && !authenticate){ alert.error(error)}
    if(adminInfo){ navigation('/admin')}
  },[adminInfo, alert, authenticate, error, navigation, success])
   
   
     const  onSubmit= (event) =>{
       event.preventDefault()
     
        if(!(email && password)){
         return alert.error("All fields required")
        }else if(!isEmailVaild.test(email)){
           return alert.error("Please enter a valid email")
         
        }else if(!isPasswordValid.test(password)){
           return alert.error("Please enter a valid password, at least 8 characters, Uppercase and number")
         
        }
        
        else{
        const data={email,password}
        if(data){
            dispatch(setLogin(data))
  
        }

    
        
        }
        
       
       
      
     }
   
   
    

   
    

  return (
    <div>
       <Fragment>
       
    <MetaData title="login"/>
  
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Login Now</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form method='post' onSubmit={onSubmit}>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Password</label>
       <input type='password'  onChange={passwordHandler} value={password}  className='form-control' name="password" />
   

								</div>

								<div className="col-md-6">
                <label htmlFor='email'>Email</label>
       <input type='text'  className='form-control' value={email} onChange={emailHandler} name='email'/>
       
								</div>
                
							</div>

						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Login</button>
								<br></br>
               <Link to="/register">Click here to register</Link>
						</form>
		
					</div>
			</div>
		</div>
	</section>
   </Fragment>
    </div>
  )
}

export default LoginComponent
