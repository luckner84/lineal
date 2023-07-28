import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {userGetCategory } from '../store/actions/categoryAction'
import { Link } from 'react-router-dom'

const CatetegoryComponent = () => {
    const dispatch=useDispatch()
    const {category}=useSelector(state=>state.categories)

    useEffect(()=>{
       dispatch(userGetCategory())
    },[dispatch])
  return (
    
            <aside className="col-lg-4 right-blog-con text-right">
					<div className="right-blog-info text-left">


                    <div className="tech-btm">
							<h4>Our Services</h4>
							
							{
                                Array.from(category,(item,idx)=>(


                                    <div className="blog-grids row mb-3" key={idx}>
								<div className="col-md-5 blog-grid-left">
									<Link to={`/services/${item.slug}`}>
										<img src={`/${item.image}`} className="img-fluid" alt=""/>
									</Link>
								</div>
								<div className="col-md-7 blog-grid-right">

									<h5>
										<Link to={`/services/${item.slug}`}>{item.name}</Link>
									</h5>
									<div className="sub-meta">
										
									</div>
								</div>
								
							</div>
                                ))
                            }



						</div>

                 </div>
               </aside>
          
  )
}

export default CatetegoryComponent