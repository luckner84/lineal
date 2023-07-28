import axios from 'axios'
import { ADD_SERVICE_SUCCESS, SERVICE_REQUEST ,CLEAR_SUCCESS,CLEAR_ERROR, GET_SERVICE, GET_SERVICE_FAILED, SERVICE_DETAIL, SERVICE_DETAIL_FAILED, EDIT_SERVICE_SUCCESS, EDIT_SERVICE_FAILED, DELETE_SERVICE, DELETE_SERVICE_FAILED, EDIT_IMAGE_SERVICE, EDIT_IMAGE_SERVICE_FAILED, SERVICE_BY_CATEGORY, SERVICE_BY_CATEGORY_FAILED, USER_GET_SERVICE, USER_GET_SERVICE_FAILED} from '../constants/servicesConstants'

export const AddService=(serviceInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.post('/api/services/add-service',serviceInfo,config)
          
            dispatch({type:SERVICE_REQUEST})
           
                dispatch({
                    type:ADD_SERVICE_SUCCESS,
                    payload:{
                        service:data,
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


export const getService=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get('/api/services/get-service',config)
         
            
                dispatch({
                    type:GET_SERVICE,
                    payload:{
                        service:data
                    }
              })
            
            setTimeout(()=>{ dispatch({type: SERVICE_REQUEST})},2000)
        
        } catch (error) {
           
            dispatch({
                type:GET_SERVICE_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const getServiceDetail=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get(`/api/services/detail/${id}`,config)

            setTimeout(()=>{  dispatch({type: SERVICE_REQUEST})},2000)
           
                dispatch({
                    type:SERVICE_DETAIL,
                    payload:{
                        serviceDetail:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:SERVICE_DETAIL_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const EditService=(id,serviceInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.patch(`/api/services/edit-service/${id}`,serviceInfo,config)
          
         
           
                dispatch({
                    type:EDIT_SERVICE_SUCCESS,
                    payload:{
                        service:data,
                      success:data.message
                    }
              })
              
             setTimeout(()=>{
                dispatch({type:SERVICE_REQUEST})
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
                type:EDIT_SERVICE_FAILED,
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


export const EditServiceImage=(id,serviceInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.patch(`/api/services/edit-image-service/${id}`,serviceInfo,config)
          
         
           
                dispatch({
                    type:EDIT_IMAGE_SERVICE,
                    payload:{
                        service:data,
                      success:data.message
                    }
              })
              
             setTimeout(()=>{
                dispatch({type:SERVICE_REQUEST})
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
                type:EDIT_IMAGE_SERVICE_FAILED,
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

export const deleteService=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.delete(`/api/services/delete-service/${id}`,config)

              
            
                dispatch({
                    type:DELETE_SERVICE,
                    payload:{
                        service:data
                    }
              })
            
          
              dispatch({type: SERVICE_REQUEST})
        } catch (error) {
           
            dispatch({
                type:DELETE_SERVICE_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}





export const userGetService=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const {data}=await axios.get(`/api/services/user-get-service`,config)

        
            setTimeout(()=>{  dispatch({type: SERVICE_REQUEST})},2000)
                dispatch({
                    type:USER_GET_SERVICE,
                    payload:{
                        service:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:USER_GET_SERVICE_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}

export const getServiceByCategory=(slug)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const {data}=await axios.get(`/api/services/user-get-category/${slug}`,config)

        
            setTimeout(()=>{  dispatch({type: SERVICE_REQUEST})},2000)
                dispatch({
                    type:SERVICE_BY_CATEGORY,
                    payload:{
                        service:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:SERVICE_BY_CATEGORY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}