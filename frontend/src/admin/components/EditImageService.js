import React ,{Fragment,useState} from 'react'
import MetaData from './MetaData'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {isImageValid} from '../../utils/checkValidation'
import { useAlert } from 'react-alert'
import SpinLoader from '../../UI/SpinLoader'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
import { EditServiceImage, getServiceDetail } from '../../store/actions/serviceAction'

const EditImageService = () => {
    const dispatch=useDispatch()
    const params=useParams()
    const {serviceId}=params
   const navigation=useNavigate()
    const {success,error,loading}=useSelector(state=>state.services)
    const {serviceDetail}=useSelector(state=>state.serviceDetails)
    const [image,setImage]=useState("")
   const alert=useAlert()
   const [previewImageUrl, setPreviewImageUrl]=useState()

   const imageChangeHandler=(event)=>{
    const image_file=event.target.files[0]
    let validation=setImage(image_file)
     validation=image_file.name.match(isImageValid)

    if(!validation){
        return alert.error("Please enter a valid  image")
    }

}

useEffect(()=>{
    if(!image){
        return
    }
    const filereader=new FileReader()
    filereader.onload=()=>{
        setPreviewImageUrl(filereader.result)
    }
    filereader.readAsDataURL(image)
},[image])


     const submitHandler=(event)=>{
       event.preventDefault();
        
       const formData=new FormData()
       if(!image){
        return
     }
       formData.append('image', image)
       
     if(formData){
       dispatch((EditServiceImage(serviceId,formData)))
     }
       
     }
   
     useEffect(()=>{
       dispatch(getServiceDetail(serviceId))
     },[serviceId, dispatch])
   
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
       <MetaData title="edit-service"/>
        {loading && <SpinLoader/>}
       <section className="main-content">
           <div className="container">
               <h3 className="tittle">Edit Image</h3>
               
                   <div className="inner-sec">
               <div className="login p-5 bg-light mx-auto mw-100">
         
         <form onSubmit={submitHandler}>
       <h4>{ serviceDetail ? <img src={previewImageUrl?previewImageUrl:`/${serviceDetail.image}`} alt='' style={{width:'30px', height:'30px'}}/>:''}</h4>
                           <div className="form-row">
   
                                   <div className="col-md-6">
                  <label htmlFor='logo'>Image</label>
          <input type='file' onChange={imageChangeHandler}   id="image" className='form-control' name="image" />
      
   
                                   </div>
   
                                 
                               </div>
   
   

           
                           <br></br>
   
                               <button type="submit" className="btn btn-primary submit mb-4">Save Image</button>
                                   <br></br>
                           <span><Link to="/admin/services">Click here to back home</Link></span>
                           </form>
           
                       </div>
               </div>
           </div>
       </section>
       <Footer/>
      </Fragment>
     )
}

export default EditImageService
