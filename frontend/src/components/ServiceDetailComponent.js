import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getServiceByCategory } from '../store/actions/serviceAction'

const ServiceDetailComponent = () => {
    const dispatch=useDispatch()
    const {service}=useSelector(state=>state.services)

    const params=useParams()
    const{slug}=params

    useEffect(()=>{
       dispatch(getServiceByCategory(slug))
    },[dispatch, slug])
  return (
    <section className="main-content">
    <div className="container">
        <div className="row">
        
            <div className="col-lg-8 left-blog-info text-left">
                <div className="blog-grid-top">

                {
                    Array.from(service,(item)=>(
                    

               
                      <Fragment>
                        <div className="b-grid-top">
                        <div className="blog_info_left_grid">
                            <Link to="">
                                <img src={`/${item.image}`} className="img-fluid" alt=""/>
                            </Link>
                        </div>
                        
                    </div>
                            <h3>
                        <Link to="/">{item.title} </Link>
                    </h3>
                    <p>{item.description}</p>
                      </Fragment>
                    ))
                }
                    <Link to="/contact" className="btn btn-primary read-m">Contact Us Now</Link>
                </div>
            
                

            </div>
        
       
        
        </div>
    </div>
</section>
  )
}

export default ServiceDetailComponent