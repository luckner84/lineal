import axios from 'axios'
import { ADD_COMPANY_REQUEST, ADD_COMPANY_SUCCESS, CLEAR_ERROR, CLEAR_SUCCESS, COMPANY_DETAIL, COMPANY_DETAIL_FAILED, COMPANY_REQUEST, DELETE_COMPANY, DELETE_COMPANY_FAILED, EDIT_COMPANY_FAILED, EDIT_COMPANY_SUCCESS, EDIT_IMAGE_COMPANY, EDIT_IMAGE_COMPANY_FAILED, GET_COMPANY, GET_COMPANY_FAILED, USER_GET_COMPANY, USER_GET_COMPANY_FAILED } from '../constants/companyConstant'

export const AddCompany=(companyInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.post('/api/companies/add-company',companyInfo,config)
          
            dispatch({type:ADD_COMPANY_REQUEST})
           
                dispatch({
                    type:ADD_COMPANY_SUCCESS,
                    payload:{
                        company:data,
                      success:data.message
                    }
              })
            


           setTimeout(()=>{
            dispatch({
                type: CLEAR_SUCCESS,
               payload:{
                success:""
               }
            })
            getCompany()
           },2000)
        
        } catch (error) {
           
            dispatch({
                type:CLEAR_ERROR,
                payload:{
                  error:error.response.data.message
                }
          })

          setTimeout(()=>{
            dispatch({
                type: CLEAR_ERROR,
               payload:{
                error:""
               }
            })
           },3000)
        }
    }
}


export const getCompany=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get('/api/companies/get-company',config)
          
            
           
                dispatch({
                    type:GET_COMPANY,
                    payload:{
                        company:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:GET_COMPANY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}



export const userGetCompany=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const {data}=await axios.get('/api/companies/user-get-company',config)
          
            
           
                dispatch({
                    type:USER_GET_COMPANY,
                    payload:{
                        company:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:USER_GET_COMPANY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const getcompanyDetail=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get(`/api/companies/detail/${id}`,config)

        
           
                dispatch({
                    type:COMPANY_DETAIL,
                    payload:{
                        companyDetail:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:COMPANY_DETAIL_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const EditCompany=(id,companyInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.patch(`/api/companies/edit-company/${id}`,companyInfo,config)
          
         
           
                dispatch({
                    type:EDIT_COMPANY_SUCCESS,
                    payload:{
                        company:data,
                      success:data.message
                    }
              })
              
             setTimeout(()=>{
                dispatch({type:COMPANY_REQUEST})
             },2000)


           setTimeout(()=>{
            dispatch({
                type: CLEAR_SUCCESS,
               payload:{
                success:""
               }
            })
         
           },2000)
           
          
        } catch (error) {
           
            dispatch({
                type:EDIT_COMPANY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

          setTimeout(()=>{
            dispatch({
                type: CLEAR_ERROR,
               payload:{
                error:""
               }
            })
           },2000)
        }
    }

    
}

export const EditLogoCompany=(id,companyInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.patch(`/api/companies/edit-company-logo/${id}`,companyInfo,config)
          
         
           
                dispatch({
                    type:EDIT_IMAGE_COMPANY,
                    payload:{
                        company:data,
                      success:data.message
                    }
              })
              
             setTimeout(()=>{
                dispatch({type:COMPANY_REQUEST})
             },2000)


           setTimeout(()=>{
            dispatch({
                type: CLEAR_SUCCESS,
               payload:{
                success:""
               }
            })
         
           },2000)
           
          
        } catch (error) {
           
            dispatch({
                type:EDIT_IMAGE_COMPANY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

          setTimeout(()=>{
            dispatch({
                type: CLEAR_ERROR,
               payload:{
                error:""
               }
            })
           },2000)
        }
    }

    
}

export const deletecompany=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.delete(`/api/companies/delete-company/${id}`,config)

        
           
                dispatch({
                    type:DELETE_COMPANY,
                    payload:{
                        company:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:DELETE_COMPANY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}