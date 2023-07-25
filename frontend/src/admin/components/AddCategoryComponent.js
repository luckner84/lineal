import React ,{Fragment,useEffect,useState} from 'react'
import MetaData from './MetaData'
import { Link,useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useSelector,useDispatch } from 'react-redux'
import {isAlphaValid,isImageValid} from '../../utils/checkValidation'
import SpinLoader from '../../UI/SpinLoader'
import { AddCategory } from '../../store/actions/categoryAction'

const AddCategoryComponent= () => {

	const {success,error,loading}=useSelector(state=>state.categories)

	const [name,setName]=useState("")
	const [previewImageUrl, setPreviewImageUrl]=useState()
	const [file,setFile]=useState("")

	const alert=useAlert()
	 const dispatch=useDispatch()
	 const navigation=useNavigate()
   
	const nameHandler=(e)=>{
	   setName(e.target.value)
	 
	}
	
   
   

 

const fileChangeHandler=(event)=>{
  
    setFile(event.target.files[0])
    //const validation=image_file.name.match(validImage)

    

}
   

  


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
	   setName('')
	   setPreviewImageUrl('')
	   document.getElementById('image').value=''
	   setTimeout(()=>{  navigation('/admin/categories')},2000)
	  
	 
	  }
	
	  if(error){
	   alert.error(error)
	 
	  }
   },[alert, error, navigation, success, dispatch])


   const  onFinish= (event) =>{
    event.preventDefault()
  
     if(!(name && file)){
      return alert.error("All fields required")
     }else if(!isAlphaValid.test(name)){
      
        return alert.error("Please enter a valid name")
     }
	 else if(!file.name.match(isImageValid)){
        return alert.error("Please enter a valid image")
     }
     
     else{
      event.preventDefault();
		const formData=new FormData()
		formData.append('name', name)
		formData.append('image', file)
		
      if(formData){
		dispatch(AddCategory(formData))
		
	  }
	
     }
     
   
      
   
  }
 

  return (
    <Fragment>
    <MetaData title="add-category"/>
	{loading && <SpinLoader/>}
  
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Add Category</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={onFinish}>
	  <h4>{ previewImageUrl ? <img src={previewImageUrl} alt='' style={{width:'10px', height:'10px'}}/>:''}</h4>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Title</label>
       <input type='text' onChange={nameHandler}  value={name}  className='form-control' name="name" />
   

								</div>

                                <div className="col-md-6">
<label htmlFor='image'>Image</label>
<input type='file' onChange={fileChangeHandler} id="image" className='form-control' name="image"/>

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
   </Fragment>
  )
}

export default AddCategoryComponent

