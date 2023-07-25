import React from 'react'
import {Route,Routes, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import AdminHome from './admin/pages/AdminHome';
import EditAdmin from './admin/pages/EditAdmin';
import AdminLogin from './admin/pages/AdminLogin';
import AdminRegister from './admin/pages/AdminRegister';
import AdminCompany from './admin/pages/AdminCompany';
import AdminServices from './admin/pages/AdminServices';
import AdminEditCompany from './admin/pages/AdminEditCompany';
import AdminEditService from './admin/pages/AdminEditService';
import Company from './admin/pages/Company';
import AdminGetService from './admin/pages/AdminGetService';
import AdminAddVideo from './admin/pages/AdminAddVideo';
import AdminVideo from './admin/pages/AdminVideo';
import EditImageCompany from './admin/pages/EditImageCompany';
import AdminEditImageService from './admin/pages/AdminEditImageService';
import AdminCategory from './admin/pages/AdminCategory';
import AdminAddCategory from './admin/pages/AdminAddCategory';
import AdminEditCategoryImage from './admin/pages/AdminEditCategoryImage';
import AdminEditCategory from './admin/pages/AdminEditCategory';
import ServiceDetail from './pages/ServiceDetail';
function App() {
 
  return (
   <div>
    
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
      <Route path="/login" exact element={<AdminLogin/>} />
      <Route path="/register" exact element={<AdminRegister/>} />
      <Route path="/services/:slug" exact element={<ServiceDetail/>} />




      <Route  element={<ProtectedRoutesComponent auth={true}/>}>
      <Route path='/admin' exact element={<AdminHome/>}/> 
      <Route path='/admin/detail/:userId' element={<EditAdmin/>}/>
      <Route path='/admin/add-company' exact element={<AdminCompany/>}/> 
      <Route path='/admin/add-service' exact element={<AdminServices/>}/> 
      <Route path='/admin/company' exact element={<Company/>}/> 
      <Route path='/admin/company-detail/:compId' exact element={<AdminEditCompany/>}/>
      <Route path='/admin/image-company-detail/:compId' exact element={<EditImageCompany/>}/>
      <Route path='/admin/services' exact element={<AdminGetService/>}/> 
      <Route path='/admin/add-video' exact element={<AdminAddVideo/>}/> 
      <Route path='/admin/videos' exact element={<AdminVideo/>}/> 
      <Route path='/admin/edit-service/:serviceId' exact element={<AdminEditService/>}/>
      <Route path='/admin/image-service-detail/:serviceId' exact element={<AdminEditImageService/>}/> 

      <Route path='/admin/categories' exact element={<AdminCategory/>}/> 
      <Route path='/admin/add-category' exact element={<AdminAddCategory/>}/> 
      <Route path='/admin/edit-category/:categoryId' exact element={<AdminEditCategory/>}/>
      <Route path='/admin/image-category-detail/:categoryId' exact element={<AdminEditCategoryImage/>}/>  
         </Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
