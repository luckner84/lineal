import React  from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countCategory, getCategory } from '../store/actions/categoryAction'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const UICarousel = (props) => {

  const {count}=useSelector(state=>state.countCategory)
  const {category}=useSelector(state=>state.categories)
  const dispatch=useDispatch()
 
  useEffect(()=>{
   dispatch(countCategory())
  },[dispatch])

  useEffect(()=>{
    dispatch(getCategory())
  },[dispatch])

 



  return (
   
    <Carousel autoPlay={true} >
                

               {
                 Array.from(category,(item,idx)=>(

                  <div key={idx}>
                    <img src={`/${item.image}`}  alt={item.name}/>
                    <p className="legend">{item.name}</p>
                </div>
                  
                 ))
               }
    
                
            </Carousel>


  )
}

export default UICarousel