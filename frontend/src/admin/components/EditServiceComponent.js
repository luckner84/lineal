import React ,{Fragment} from 'react'
import MetaData from './MetaData'
import { Link, useNavigate, useParams,useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {isAlphaValid} from '../../utils/checkValidation'
import { useAlert } from 'react-alert'
import SpinLoader from '../../UI/SpinLoader'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
import { EditService, getServiceDetail } from '../../store/actions/serviceAction'
import { getCategory } from '../../store/actions/categoryAction'

const EditServiceComponent = () => {

 const dispatch=useDispatch()
 const params=useParams()
 const {serviceId}=params
const navigation=useNavigate()
 const {success,error,loading}=useSelector(state=>state.services)
 const {category: categories}=useSelector(state=>state.categories)
 const {serviceDetail}=useSelector(state=>state.serviceDetails)
const alert=useAlert()
let data
  const submitHandler=(event)=>{
	
    event.preventDefault();
    event.stopPropagation();
    const form=event.currentTarget.elements;

    const title=form.title.value;
    const category=form.category.value;
	const description=form.description.value;
    const dataValues={title,category,description}

    
	if(!(title && category && description)){
		return alert.error("All fields required")
	   }else if(!isAlphaValid.test(title)){
		
		  return alert.error("Please enter a valid title")
	  
  
	   }else if(!category){
		  return alert.error("Please enter your category")
		
	   }else if(!description){
		  return alert.error("Please enter the description")
	   }else{
		if(dataValues){
          dispatch(EditService(serviceId,dataValues))
		 
		}
	   }
	 
    
  }

  useEffect(()=>{
	dispatch(getServiceDetail(serviceId))
  },[dispatch, serviceId])

  useEffect(()=>{
	if(success){
	
	 alert.success(success)
	
	 setTimeout(()=>{window.location.href='/admin/services'},2000)
	}
  
	if(error){
	 alert.error(error)
   
	}
 },[alert, error, navigation, success, dispatch])

 useEffect(()=>{
    dispatch(getCategory())
 },[dispatch])

 const transform=(str)=>{
	let cat=str.replace((/(?<=\b)\w/g), match => match.toUpperCase())

	return cat.replace(/-/g, ' ')
 }
  return (
    <Fragment>
		<AdminHeader/>
    <MetaData title="edit-service"/>
    {loading && <SpinLoader/>}
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Edit Service</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={submitHandler}>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='title'>Title</label>
       <input type='text'   defaultValue={serviceDetail.title} id='title'  className='form-control' name="title" />
   

								</div>

								<div className="col-md-6">
                <label htmlFor='category'>Category</label>
				<select name="category" className='form-control' id="category" required>

				  <option value="">select...</option>
					{
						
						Array.from(categories,(item,idx)=>{
						    
						     
							
							 if(item.slug===serviceDetail.category){
								data=<option key={idx} value={item.slug}>{transform(item.slug)}</option>
							 }
							 data=<option key={idx} value={item.slug}>{transform(item.slug)}</option>
							 
							
							 
                 return data
						
})
					}
				</select>
       
								</div>
                
							</div>

              


<div  className="form-row"> 
<div className='col-md-6'>

<label htmlFor='description'>Description</label>
<textarea className='form-control' rows="5" defaultValue={serviceDetail.description} id='description' name='description'></textarea>
</div>
</div>
        
						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Submit</button>
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

export default EditServiceComponent

