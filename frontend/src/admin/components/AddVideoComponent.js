import React ,{Fragment,useEffect,useState} from 'react'
import MetaData from './MetaData'
import { Link,useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useSelector,useDispatch } from 'react-redux'
import {isAlphaValid,isVideoValid} from '../../utils/checkValidation'
import SpinLoader from '../../UI/SpinLoader'
import { AddVideo } from '../../store/actions/videoAction'

const AddVideoComponent = () => {

    const {success,error,loading}=useSelector(state=>state.videos)

	const [title,setTitle]=useState("")
	const [previewImageUrl, setPreviewImageUrl]=useState()
	const [file,setFile]=useState("")


	const alert=useAlert()
	 const dispatch=useDispatch()
	 const navigation=useNavigate()
   
	const titleHandler=(e)=>{
	   setTitle(e.target.value)
	 
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
	   setTitle('')
	   setPreviewImageUrl('')
	   document.getElementById('video').value=''
	   setTimeout(()=>{  navigation('/admin/videos')},2000)
	  
	 
	  }
	
	  if(error){
	   alert.error(error)
	 
	  }
   },[alert, error, navigation, success, dispatch])


   const  onFinish= (event) =>{
    event.preventDefault()
  
     if(!(title && file)){
      return alert.error("All fields required")
     }else if(!isAlphaValid.test(title)){
      
        return alert.error("Please enter a valid title")

     }
	 else if(!file.name.match(isVideoValid)){
        return alert.error("Please enter a valid video format")
     }
     
     else{
      event.preventDefault();
		const formData=new FormData()
		formData.append('title', title)
		formData.append('video', file)
		
      if(formData){
		dispatch(AddVideo(formData))
		
	  }
	
     }
     
   
      
   
  }
 
  return (
    <Fragment>
    <MetaData title="add-service"/>
	{loading && <SpinLoader/>}
  
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Add Video</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      
      <form onSubmit={onFinish}>

      
	  <h4>{ previewImageUrl ? <video width="40" height="40" controls>
  <source src={previewImageUrl} />
 
</video>:''}</h4>
						<div className="form-row">

								<div className="col-md-6">
               <label htmlFor='name'>Title</label>
       <input type='text' onChange={titleHandler}  value={title}  className='form-control' name="title" />
   

								</div>

                
							</div>

              

              <div className="form-row">

<div className="col-md-6">
<label htmlFor='video'>Video</label>
<input type='file' onChange={fileChangeHandler} id="video" className='form-control' name="video"/>

</div>

</div>


						<br></br>

							<button type="submit" className="btn btn-primary submit mb-4">Submit</button>
								<br></br>
                        <span><Link to="/admin/video">Click here to back home</Link></span>
						</form>
		
					</div>
			</div>
		</div>
	</section>
   </Fragment>
  )
}

export default AddVideoComponent
