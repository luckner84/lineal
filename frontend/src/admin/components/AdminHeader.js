import React from 'react'
import {Link, NavLink, useLocation, useNavigate} from 'react-router-dom'
import { useSelector , useDispatch} from 'react-redux';
import { userLogout } from '../../store/actions/loginAction';
const AdminHeader = () => {
	const pathname=useLocation().pathname
	const {adminInfo}=useSelector(state=>state.auth)
	const navigation=useNavigate()
	const dispatch=useDispatch()

	const logoutHandler=()=>{
		dispatch(userLogout())
		navigation('/login')
	}
  return (
 
    	<header>
		<div className="top-bar_sub container-fluid">
			<div className="row">
				<div className="col-md-4 logo text-left">
					<Link className="navbar-brand" href="index.html">
						<i className="fab fa-linode"></i>LC</Link>
				</div>
				{adminInfo && <><div className="col-md-4 top-forms text-center mt-lg-3 mt-md-1 mt-0">
					<span>Welcome Back!</span>
					<span className="mx-lg-4 mx-md-2  mx-1">
						<Link to="login.html">
							<i className="fas fa-user">{adminInfo.name}</i></Link>
					</span>
					<span>
						<button className='btn btn-primary' onClick={logoutHandler}>
							<i className="far fa-unlock"></i>Logout</button>
					</span>
				</div></>}
			</div>
		</div>

			<div className="header_top" id="home">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<button className="navbar-toggler navbar-toggler-right mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
						aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				   </button>


					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
						<li>
							<NavLink to="/admin" className={`${pathname === '/' ? 'nav-link active' : 'nav-link'}`}>Home
								<span className="sr-only">(current)</span>
							</NavLink>
							</li>
					<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
								    aria-expanded="false">
									Features
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									<Link className="dropdown-item" to="#"></Link>
									<Link className="dropdown-item" to="/admin/services">Services</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/admin/categories">Category</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/admin/company">Company</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/admin">Profile</Link>
								</div>
							</li>
							

							

						</ul>
							<form action="#" method="post" className="form-inline my-2 my-lg-0 header-search">
								
							</form>
		
						

					</div>
				</nav>

			</div>
	</header>

 

	
  )
}

export default AdminHeader