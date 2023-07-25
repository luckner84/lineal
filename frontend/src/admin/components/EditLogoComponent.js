import React ,{Fragment,useState} from 'react'
import MetaData from './MetaData'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {EditLogoCompany, getcompanyDetail } from '../../store/actions/companyAction'
import {isImageValid} from '../../utils/checkValidation'
import { useAlert } from 'react-alert'
import SpinLoader from '../../UI/SpinLoader'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'

const EditLogoComponent = () => {
    const dispatch=useDispatch()
    const params=useParams()
    const {compId}=params
   const navigation=useNavigate()
    const {success,error,loading}=useSelector(state=>state.companyInfo)
    const {companyDetail}=useSelector(state=>state.compDetail)
    const [logo,setLogo]=useState("")
   const alert=useAlert()
   const [previewImageUrl, setPreviewImageUrl]=useState()

   const logoChangeHandler=(event)=>{
    const image_file=event.target.files[0]
    let validation=setLogo(image_file)
     validation=image_file.name.match(isImageValid)

    if(!validation){
        return alert.error("Please enter a valid logo image")
    }

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


     const submitHandler=(event)=>{
       event.preventDefault();
        
       const formData=new FormData()
       if(!logo){
        return
     }
       formData.append('logo', logo)
       
     if(formData){
       dispatch((EditLogoCompany(compId,formData)))
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
               <h3 className="tittle">Edit Company Logo</h3>
               
                   <div className="inner-sec">
               <div className="login p-5 bg-light mx-auto mw-100">
         
         <form onSubmit={submitHandler}>
       <h4>{ companyDetail ? <img src={previewImageUrl?previewImageUrl:`/${companyDetail.logo}`} alt='' style={{width:'30px', height:'30px'}}/>:''}</h4>
                           <div className="form-row">
   
                                   <div className="col-md-6">
                  <label htmlFor='logo'>Logo</label>
          <input type='file' onChange={logoChangeHandler}   id="logo" className='form-control' name="logo" />
      
   
                                   </div>
   
                                 
                               </div>
   
   

           
                           <br></br>
   
                               <button type="submit" className="btn btn-primary submit mb-4">Save Image</button>
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

export default EditLogoComponent
