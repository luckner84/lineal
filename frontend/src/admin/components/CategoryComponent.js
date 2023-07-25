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
import { deleteCategory, getCategory } from '../../store/actions/categoryAction'

const CategoryComponent = () => {
  const {category, loading, success,error}=useSelector(state=>state.categories)
  const [items, setItems]=useState([])
  const dispatch=useDispatch()
  const navigation=useNavigate()
  const alert=useAlert()



  const deleteHandler=(categoryId)=>{
    

    if (window.confirm("are you sure you want to delete?")) {
      dispatch(deleteCategory(categoryId))
    }
    setTimeout(()=>{ navigation('/admin/categories')},2000)
 }
 const editHandler=(categoryId)=>{
    
     window.location.href=`/admin/edit-category/${categoryId}`
 }
 const editImageCategory=(categoryId)=>{
       
        window.location.href=`/admin/image-category-detail/${categoryId}`
 }



 

  useEffect(()=>{
    dispatch(getCategory())

  },[dispatch])

  useEffect(()=>{

  if(category!==null){
    const mappedData = Array.from(category,(data) => {
      return {
        ...data,
      };
    });
  setItems(mappedData)
  }


},[category])


  const columns = [
    {
      title: "Category",
      dataIndex: "name"
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
         <button className='btn btn-danger' onClick={()=>{deleteHandler(key)}}><i className='fas fa-trash'></i></button> <button className='btn btn-info' onClick={()=>{editHandler(key)}}><i className='fas fa-edit'></i></button> <button className='btn btn-info' onClick={()=>{editImageCategory(key)}}><i className='fas fa-edit'>Image</i></button>
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
       <MetaData title="category"/>
      
      <section className="main-content">
		<div className="container">
			<h3 className="tittle">Categories</h3>
      <Link to="/admin/add-category" className='btn btn-primary'>Add Category</Link>
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

export default CategoryComponent
