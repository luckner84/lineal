import React, { Fragment } from 'react'
import Header from '../UI/Header'
import UICarousel from '../UI/Carousel'
import Main from '../UI/Main'
import Footer from '../UI/Footer'
import Category from './Category'
const Home = () => {
  return (
    <Fragment>
        <Header/>
        <UICarousel/>
      
        <Main><Category/></Main>
       
        <Footer/>
    </Fragment>
  )
}

export default Home