import React ,{Fragment} from 'react'
import MetaData from './MetaData'
import { Link, useNavigate, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {isAlphaValid} from '../../utils/checkValidation'
import { useAlert } from 'react-alert'
import SpinLoader from '../../UI/SpinLoader'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
import { EditCategory, getCategoryDetail } from '../../store/actions/categoryAction'

const EditCategoryComponent = () => {

 const dispatch=useDispatch()
 const params=useParams()
 const {categoryId}=params
const navigation=useNavigate()
 const {error,loading, success}=useSelector(state=>state.categories)
 const {categoryDetail}=useSelector(state=>state.categoryDetails)
const alert=useAlert()
  const submitHandler=(event)=>{
	
    event.preventDefault();
    event.stopPropagation();
    const form=event.currentTarget.elements;

    const name=form.name.value;
   
    const data={name}
    
	if(!(name)){
		return alert.error("All fields required")
	   }else if(!isAlphaValid.test(name)){
		
		  return alert.error("Please enter a valid name")
	  
  
	   }else{
		if(data){
          dispatch(EditCategory(categoryId,data))
		 
		}
	   }
	 
    
  }

  useEffect(()=>{
	dispatch(getCategoryDetail(categoryId))
  },[dispatch, categoryId])
  

  useEffect(()=>{
	if(success){
	
	 alert.success(success)
	
	 setTimeout(()=>{ navigation('/admin/categories')},2000)
	}
  
	if(error){
	 alert.error(error)
   
	}
 },[alert, error, navigation, success, dispatch])

 
  return (
    <Fragment>
		<AdminHeader/>
    <MetaData title="edit-category"/>
    {loading && <SpinLoader/>}
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Edit Category</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={submitHandler}>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='title'>Title</label>
       <input type='text'   defaultValue={categoryDetail.name} id='name'  className='form-control' name="name" />
   

								</div>

						
                
							</div>

              


        
						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Submit</button>
								<br></br>
                        <span><Link to="/admin/categories">Click here to back home</Link></span>
						</form>
		
					</div>
			</div>
		</div>
	</section>
	<Footer/>
   </Fragment>
  )
}

export default EditCategoryComponent

