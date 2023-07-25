import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import SpinLoader from '../../UI/SpinLoader'
import MetaData from './MetaData'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
import {Table } from "antd";
import { useAlert } from 'react-alert'
import { deleteVideo, getVideo } from '../../store/actions/videoAction'
const VideoComponent = () => {
  const {video, loading, success,error}=useSelector(state=>state.videos)
  const [items, setItems]=useState([])
  const dispatch=useDispatch()
  const navigation=useNavigate()
  const alert=useAlert()



  const deleteHandler=(videoId)=>{
    

    if (window.confirm("are you sure you want to delete?")) {
      dispatch(deleteVideo(videoId))
    }
    setTimeout(()=>{ navigation('/admin/videos')},2000)
 }




 

  useEffect(()=>{
    dispatch(getVideo())

  },[dispatch])

  useEffect(()=>{

  if(video!==null){
    const mappedData = Array.from(video,(data) => {
      return {
        ...data,
      };
    });
  setItems(mappedData)
  }


},[video])


  const columns = [
    {
      title: "Category",
      dataIndex: "title"
    },
    {
      title: "Video",
      dataIndex: "video",
      render: (item) => {
        return <video style={{width:"30px", height:"30px"}}>
          <source src={`/${item}`}/>
        </video>
      },
    },
   
  
    {
      title: "Action",
      dataIndex: "_id",
      render: (key) => (
        <div className='col-xs-2'>
         <button className='btn btn-danger' onClick={()=>{deleteHandler(key)}}><i className='fas fa-trash'></i></button>
        </div>
      ),
    },
  ];

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
       <MetaData title="services"/>
    
      <section className="main-content">
		<div className="container">
			<h3 className="tittle">Videos</h3>
      <Link to="/admin/add-video" className='btn btn-primary'>Add Video</Link>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      {loading?<SpinLoader/>:<Table dataSource={items} columns={columns} />}
      
		
					</div>
			</div>
		</div>
	</section>
  <Footer/>
    </Fragment>
  )
}

export default VideoComponent
