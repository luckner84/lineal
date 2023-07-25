import React ,{Fragment,useEffect,useState} from 'react'
import MetaData from './MetaData'
import { Link,useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useSelector,useDispatch } from 'react-redux'
import {isAlphaValid,isEmailVaild,isImageValid,isPhoneValid} from '../../utils/checkValidation'
import { AddCompany } from '../../store/actions/companyAction'
import SpinLoader from '../../UI/SpinLoader'
const AddCompanyComponent = () => {

	const {success,error,loading}=useSelector(state=>state.companyInfo)

	const [name,setName]=useState("")
	const [email,setEmail]=useState("")
	const [previewImageUrl, setPreviewImageUrl]=useState()
	const [address,setAddress]=useState("")
	const [phone,setPhone]=useState("")
	const [logo,setLogo]=useState("")
	const [description,setDescription]=useState("")

	const alert=useAlert()
	 const dispatch=useDispatch()
	 const navigation=useNavigate()
   
	const nameHandler=(e)=>{
	   setName(e.target.value)
	 
	}
	const emailHandler=(e)=>{
	 setEmail(e.target.value)
	
	 
   }
   const addressHandler=(e)=>{
	 
	 setAddress(e.target.value)
	 
   }
   
   const phoneHandler=(e)=>{
	
	 setPhone(e.target.value)
	 
   }
   const descriptionHandler=(e)=>{
	
	setDescription(e.target.value)
	
  }

 

const logoChangeHandler=(event)=>{
  
    setLogo(event.target.files[0])
    //const validation=image_file.name.match(validImage)

    

}
   

  


useEffect(()=>{
    if(!logo){
        return
    }
    const filereader=new FileReader()
    filereader.onload=()=>{
        setPreviewImageUrl(filereader.result)
    }
    filereader.readAsDataURL(logo)
},[logo])
   
   
   
   useEffect(()=>{
	  if(success){
	  
	   alert.success(success)
	   setName('')
	   setEmail('')
	   setPhone('')
	   setDescription('')
	   setPreviewImageUrl('')
	   document.getElementById('logo').value=''
	  
	   setTimeout(()=>{window.location.href='/admin/company'},2000)
	   
	  }
	
	  if(error){
	   alert.error(error)
	 
	  }
   },[alert, error, navigation, success, dispatch])


   const  onFinish= (event) =>{
    event.preventDefault()
  
     if(!(name && email && phone && address && logo && description)){
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
     }
	 else if(!logo.name.match(isImageValid)){
        return alert.error("Please enter a valid logo image")
     }
     
     else{
      event.preventDefault();
		const formData=new FormData()
		formData.append('name', name)
		formData.append('email', email)
		formData.append('address', address)
		formData.append('phone', phone)
		formData.append('description', description)
		formData.append('logo', logo)
		
      if(formData){
		dispatch(AddCompany(formData))
	  }
	
     }
     
   
      
   
  }
 
  return (
    <Fragment>
    <MetaData title="add-company"/>
    {loading && <SpinLoader/>}
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Add Company</h3>
			
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={onFinish}>
	  <h4>{ previewImageUrl ? <img src={previewImageUrl} alt='' style={{width:'10px', height:'10px'}}/>:''}</h4>
			
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Name</label>
       <input type='text' onChange={nameHandler}  value={name}  className='form-control' name="name" />
   

								</div>

								<div className="col-md-6">
                <label htmlFor='email'>Email</label>
       <input type='text' value={email} onChange={emailHandler}  className='form-control'  name='email'/>
       
								</div>
                
							</div>

              <div className="form-row">

								<div className="col-md-6">
                 <label htmlFor='phone'>Phone</label>  
       <input type='text' value={phone} onChange={phoneHandler} className='form-control' name='phone' />
      

								</div>

								<div className="col-md-6">
                <label htmlFor='address'>Address</label>
       <input type='text' value={address} onChange={addressHandler} className='form-control' name="address"/>
      
								</div>
                
							</div>

              <div className="form-row">

<div className="col-md-6">
 <label htmlFor='logo'>Logo</label>  
<input type='file' id="logo" onChange={logoChangeHandler} className='form-control' name='logo' />


</div>



</div>
<div  className="form-row"> 
<div className='col-md-6'>

<label htmlFor='description'>Description</label>
<textarea value={description} onChange={descriptionHandler} className='form-control' rows="5" name='description'></textarea>
</div>
</div>
        
						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Save Company</button>
								<br></br>
                        <span><Link to="/admin">Click here to back home</Link></span>
						</form>
		
					</div>
			</div>
		</div>
	</section>
   </Fragment>
  )
}

export default AddCompanyComponent
