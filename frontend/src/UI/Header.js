import React, { Fragment, useEffect } from 'react'
import {Link, NavLink, useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {userGetCompany } from '../store/actions/companyAction'
import {userGetCategory } from '../store/actions/categoryAction'
import { useState } from 'react'

const Header = () => {
	const pathname=useLocation().pathname
	const {category}=useSelector(state=>state.categories)
	const {company}=useSelector(state=>state.companyInfo)
	const dispatch=useDispatch()
    const [items,setItems]=useState([])
	useEffect(()=>{
		dispatch(userGetCategory())
	},[dispatch])

	useEffect(()=>{
		dispatch(userGetCompany())
	},[dispatch])
	useEffect(()=>{
		
		setItems(category)
	},[category])
  return (
   <Fragment>
    	<header>
		<div className="top-bar_sub container-fluid">
			<div className="row">
				<div className="col-md-4 logo text-left">
					{
						Array.from(company,(item,idx)=>(
							<Link key={idx} className="navbar-brand" to="/">
						<img src={`/${item.logo}`} style={{width:"45px", height:'25px'}} alt=''/> {item.name}</Link>
						))
					}
				</div>
				<div className="col-md-4 top-forms text-center mt-lg-3 mt-md-1 mt-0">
					
				</div>
				<div className="col-md-4 log-icons text-right">

					<ul className="social_list1 mt-3">

						<li>
							<Link to="#" className="facebook1 mx-2" >
								<i className="fab fa-facebook-f"></i>

							</Link>
						</li>
						<li>
							<Link to="#" className="twitter2">
								<i className="fab fa-twitter"></i>

							</Link>
						</li>
						<li>
							<Link to="#" className="dribble3 mx-2">
								<i className="fab fa-dribbble"></i>
							</Link>
						</li>
						<li>
							<Link to="#" className="pin">
								<i className="fab fa-pinterest-p"></i>
							</Link>
						</li>
					</ul>
				</div>
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
							<NavLink to="/" className={`${pathname === '/' ? 'nav-link active' : 'nav-link'}`}>Home
								<span className="sr-only">(current)</span>
							</NavLink>

		
							</li>


							<li>

<NavLink to="/about"  className={`${pathname === '/about' ? 'nav-link active' : 'nav-link'}`}>
	About
	
</NavLink>
</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
								    aria-expanded="false">
									Category
								</Link>
								<div className="dropdown-menu" aria-labelledby="navbarDropdown">
									
								{
								items && items?.map((item,idx)=>{
									return <Link key={idx} className="dropdown-item" to={`/services/${item.slug}`}>{item.name}</Link>
								})
							}
									

								</div>
							</li>
							
							<li>

<NavLink to="/contact"  className={`${pathname === '/contact' ? 'nav-link active' : 'nav-link'}`}>Contact
	
</NavLink>
</li>
							

						</ul>
							<form action="#" method="post" className="form-inline my-2 my-lg-0 header-search">
								
							</form>
		
						

					</div>
				</nav>

			</div>
	</header>

 

	
	
   </Fragment>
  )
}

export default Header