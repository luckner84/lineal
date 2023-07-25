import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import SpinLoader from '../../UI/SpinLoader'
import MetaData from './MetaData'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
import {Table } from "antd";
import { deleteService, getService } from '../../store/actions/serviceAction'
import { useAlert } from 'react-alert'
const ServiceComponent = () => {
  const {service, loading, success,error}=useSelector(state=>state.services)
  const [items, setItems]=useState([])
  const dispatch=useDispatch()
  const navigation=useNavigate()
  const alert=useAlert()
  const transform=(str)=>{
    let cat=str.replace((/(?<=\b)\w/g), match => match.toUpperCase())
  
    return cat.replace(/-/g, ' ')
   }


  const deleteHandler=(serviceId)=>{
    

    if (window.confirm("are you sure you want to delete?")) {
      dispatch(deleteService(serviceId))
    }
     navigation('/admin/services')
 }
 const editHandler=(serviceId)=>{
     window.location.href=`/admin/edit-service/${serviceId}`
 }
 const editImageService=(serviceId)=>{
       
        window.location.href=`/admin/image-service-detail/${serviceId}`
 }



 

  useEffect(()=>{
    dispatch(getService())

  },[dispatch])

  useEffect(()=>{

  if(service!==null){
    const mappedData = Array.from(service,(data) => {
      return {
        ...data,
      };
    });
  setItems(mappedData)
  }


},[service])


  const columns = [
    {
      title: "Category",
      dataIndex: "category",
      render:(cat)=>{
        return transform(cat)
      }
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (item) => {
        return <img src={`/${item}`} style={{width:"30px", height:"30px"}} alt=''/>
      },
    },
   
  
    {
      title: "Action",
      dataIndex: "_id",
      render: (key) => (
        <div className='col-xs-2'>
         <button className='btn btn-danger' onClick={()=>{deleteHandler(key)}}><i className='fas fa-trash'></i></button> <button className='btn btn-info' onClick={()=>{editHandler(key)}}><i className='fas fa-edit'></i></button> <button className='btn btn-info' onClick={()=>{editImageService(key)}}><i className='fas fa-edit'>Image</i></button>
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
			<h3 className="tittle">Services</h3>
      <Link to="/admin/add-service" className='btn btn-primary'>Add Service</Link>
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

export default ServiceComponent
