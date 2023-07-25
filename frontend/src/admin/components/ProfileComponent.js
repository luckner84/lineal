import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAccount } from '../../store/actions/loginAction';
import SpinLoader from '../../UI/SpinLoader';
const ProfileComponent = () => {
    const {adminInfo,loading}=useSelector(state=>state.auth)
    const navigation=useNavigate()
    const dispatch=useDispatch()

    const deleteHandler=()=>{
       dispatch(deleteAccount())
      
    }
    const editHandler=()=>{
        navigation(`/admin/detail/${adminInfo._id}`)
    }
 
  
   
  return (
    <section className="main-content">
		<div className="container">
			<h3 className="tittle">Profile</h3>
				<div className="inner-sec">
			<div className="login p-5 bg-light mx-auto mw-100">
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
 <>
 {loading?  adminInfo===null?<SpinLoader/>: (adminInfo && <tr>
    <th scope="row">1</th>
      <td>{adminInfo.name}</td>
      <td>{adminInfo.email}</td>
      <td><button className='btn btn-default' onClick={deleteHandler}><i className='fas fa-trash'></i></button><button className='btn btn-default' onClick={editHandler}><i className='fas fa-edit'></i></button></td>
    </tr>):null}
 </>
    
  </tbody>
</table>
      
		
					</div>
			</div>
		</div>
	</section>
  )
}

export default ProfileComponent
