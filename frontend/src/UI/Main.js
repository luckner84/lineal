import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { getCompany } from '../store/actions/companyAction'
import { useEffect } from 'react'
const Main = (props) => {

	const {company}=useSelector(state=>state.companyInfo)
	const dispatch=useDispatch()
	useEffect(()=>{
		dispatch(getCompany)
	},[dispatch])
  return (
    
	
      <section className="main-content">
		<div className="container">
			<div className="row">
			
				<div className="col-lg-8 left-blog-info text-left">
					<div className="blog-grid-top">
						<div className="b-grid-top">
							<div className="blog_info_left_grid">
								<Link to="">
									<img src="images/detail.jpg" className="img-fluid" alt=""/>
								</Link>
							</div>
							
						</div>

					{
						Array.from(company,(item,idx)=>(
                          <Fragment key={idx}>
								<h3>
							<Link to="/">{item.name} </Link>
						</h3>
						<p>{item.description}</p>
						  </Fragment>
						))
					}
						<Link to="/contact" className="btn btn-primary read-m">Contact Us Now</Link>
					</div>
				
					

				</div>
			
			{props.children}
			
			</div>
		</div>
	</section>
  )
}

export default Main