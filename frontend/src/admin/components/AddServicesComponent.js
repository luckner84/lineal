import React ,{Fragment,useEffect,useState} from 'react'
import MetaData from './MetaData'
import { Link,useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useSelector,useDispatch } from 'react-redux'
import {isAlphaValid,isImageValid} from '../../utils/checkValidation'
import SpinLoader from '../../UI/SpinLoader'
import { AddService } from '../../store/actions/serviceAction'
import { getCategory } from '../../store/actions/categoryAction'

const AddServicesComponent= () => {

	const {success,error,loading}=useSelector(state=>state.services)
	const {category:categories}=useSelector(state=>state.categories)
	

	const [title,setTitle]=useState("")
	const [category,setCategory]=useState("")
	const [previewImageUrl, setPreviewImageUrl]=useState()
	const [file,setFile]=useState("")
	const [description,setDescription]=useState("")

	const alert=useAlert()
	 const dispatch=useDispatch()
	 const navigation=useNavigate()
   
	const titleHandler=(e)=>{
	   setTitle(e.target.value)
	 
	}
	const categoryHandler=(e)=>{
	 setCategory(e.target.value)
	
	 
   }
   
   
  
   const descriptionHandler=(e)=>{
	
	setDescription(e.target.value)
	
  }

 

const fileChangeHandler=(event)=>{
  
    setFile(event.target.files[0])
    //const validation=image_file.name.match(validImage)

    

}
   

  useEffect(()=>{
	dispatch(getCategory())
  },[dispatch])


useEffect(()=>{
    if(!file){
        return
    }
    const filereader=new FileReader()
    filereader.onload=()=>{
        setPreviewImageUrl(filereader.result)
    }
    filereader.readAsDataURL(file)
},[file])
   
   
   
   useEffect(()=>{
	  if(success){
	  
	   alert.success(success)
	   setTitle('')
	   setCategory('')
	   setDescription('')
	   setPreviewImageUrl('')
	   document.getElementById('image').value=''
	   setTimeout(()=>{ window.location.href='/admin/services'},2000)
	  
	 
	  }
	
	  if(error){
	   alert.error(error)
	 
	  }
   },[alert, error, navigation, success, dispatch])


   const  onFinish= (event) =>{
    event.preventDefault()
  
     if(!(title && category  && file && description)){
      return alert.error("All fields required")
     }else if(!isAlphaValid.test(title)){
      
        return alert.error("Please enter a valid name")
    

     }else if(!category){
        return alert.error("Please enter your address")
      
     }else if(!description){
        return alert.error("Please enter company description")
     }
	 else if(!file.name.match(isImageValid)){
        return alert.error("Please enter a valid logo image")
     }
     
     else{
      event.preventDefault();
		const formData=new FormData()
		formData.append('title', title)
		formData.append('category', category)
		formData.append('description', description)
		formData.append('image', file)
		
      if(formData){
		dispatch(AddService(formData))
		
	  }
	
     }
     
   
      
   
  }
 

  return (
    <Fragment>
    <MetaData title="add-service"/>
	{loading && <SpinLoader/>}
  
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Add Service</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={onFinish}>
	  <h4>{ previewImageUrl ? <img src={previewImageUrl} alt='' style={{width:'10px', height:'10px'}}/>:''}</h4>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Title</label>
       <input type='text' onChange={titleHandler}  value={title}  className='form-control' name="title" />
   

								</div>

								<div className="col-md-6">
                <label htmlFor='email'>Category</label>

				<select className='form-control' name='category' value={category}  onChange={categoryHandler}>
                 <option>select..</option>
				 {
					Array.from(categories,(item)=>(
						<Fragment>
							<option value={item.slug}>{item.name}</option>
						</Fragment>
					))
				 }
				</select>
      
       
								</div>
                
							</div>

              

              <div className="form-row">

<div className="col-md-6">
<label htmlFor='image'>Image</label>
<input type='file' onChange={fileChangeHandler} id="image" className='form-control' name="image"/>

</div>

</div>

<div  className="form-row"> 
<div className='col-md-6'>

<label htmlFor='description'>Description</label>
<textarea className='form-control' rows="5" onChange={descriptionHandler}  value={description}name='description'></textarea>
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
   </Fragment>
  )
}

export default AddServicesComponent

