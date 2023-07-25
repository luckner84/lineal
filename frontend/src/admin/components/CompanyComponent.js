import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletecompany, getCompany } from '../../store/actions/companyAction'
import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import MetaData from './MetaData'
import AdminHeader from './AdminHeader'
import Footer from '../../UI/Footer'
const CompanyComponent = () => {
  const {company}=useSelector(state=>state.companyInfo)
  const [items, setItems]=useState([])
  const dispatch=useDispatch()
  const navigation=useNavigate()

  const deleteHandler=(compId)=>{
    

    if (window.confirm("are you sure you want to delete?")) {
      dispatch(deletecompany(compId))
    }
   
 }
 const editHandler=(compId)=>{
   

     window.location.href=`/admin/company-detail/${compId}`
 }

 const editLogoHandler=(compId)=>{
  
  window.location.href=`/admin/image-company-detail/${compId}`
}

  useEffect(()=>{
    dispatch(getCompany())

  },[dispatch])
  useEffect(()=>{company && setItems(company)},[company])

  return (
    <Fragment>
      <AdminHeader/>
       <MetaData title="company"/>
      
      <section className="main-content">
		<div className="container">
			<h3 className="tittle">Company</h3>
      <Link to="/admin/add-company" className='btn btn-primary'>Add Company</Link>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      <table className="table" width="100%">
  <thead>
    <tr>
       <th scope='col'></th>
      <th scope="col">Logo</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
 {
  items && items.length? items.map((item)=>(
    <tr  key={item._id}>
   <td></td>
    <td><img src={`/${item.logo}`} style={{with:'25px',height:'25px'}} alt={item.name}/></td>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td><button className='btn btn-default' onClick={()=>{deleteHandler(item._id)}}><i className='fas fa-trash'></i></button>
      <button className='btn btn-default' onClick={()=>{editHandler(item._id)}}><i className='fas fa-edit'></i></button>
<button className='btn btn-default' onClick={()=>{editLogoHandler(item._id)}}><i className='fas fa-edit'>Logo</i></button></td>

    </tr>
    
  )):<p className='text-center'>No data found!</p>
 }
  </tbody>
</table>
      
		
					</div>
			</div>
		</div>
	</section>
  <Footer/>
    </Fragment>
  )
}

export default CompanyComponent
