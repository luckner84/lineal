import React, { Fragment,useEffect } from 'react'
import Footer from '../UI/Footer'
import {Link} from 'react-router-dom'
import Header from '../UI/Header'
import {useSelector,useDispatch} from 'react-redux'
import { getService } from '../store/actions/serviceAction'
import { getCompany } from '../store/actions/companyAction'
const About = () => {
    
	const {service}=useSelector(state=>state.services)
	const {company}=useSelector(state=>state.companyInfo)
	const dispatch=useDispatch()

	useEffect(()=>{
		dispatch(getService())
	},[dispatch])
	useEffect(()=>{
		dispatch(getCompany())
	},[dispatch])

  return (
    <Fragment>
       <Header/>
	
	<div className="banner-inner">
	<img src='images/home1.jpg' style={{height:'300px', width:'100%'}} alt=''/>
	</div>
	<ol className="breadcrumb">
		<li className="breadcrumb-item">
			<Link to="/">Home</Link>
		</li>
		<li className="breadcrumb-item active">About</li>
	</ol>
	
	<section className="main-content">
    <div className="container">
			<h3 className="tittle">About</h3>
			<div className="row inner-sec">
			
				<div className="col-lg-8 left-blog-info text-left">
					{
						Array.from(company,(item)=>(
							<div className="blog-grid-top">

						<div className="blog_info_left_grid">
							<a href="single.html">
								<img src={`/${item.logo}`} className="img-fluid" alt=""/>
							</a>
						</div>
						<h3>
							{item.name}
						</h3>
						<p>{item.description}</p>
					
					</div>
						))
					}
					
				</div>

                </div>
                </div>
		
    </section>
                
			
	<Footer/>
    </Fragment>
  )
}

export default About