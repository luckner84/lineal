import axios from 'axios'
import { ADD_CATEGORY_SUCCESS, CATEGORY_DETAIL, CATEGORY_DETAIL_FAILED, CATEGORY_REQUEST, CLEAR_ERROR, CLEAR_SUCCESS, COUNT_CATEGORY, COUNT_CATEGORY_FAILED, DELETE_CATEGORY, DELETE_CATEGORY_FAILED, EDIT_CATEGORY_FAILED, EDIT_CATEGORY_SUCCESS, EDIT_IMAGE_CATEGORY, EDIT_IMAGE_CATEGORY_FAILED, GET_CATEGORY, GET_CATEGORY_FAILED, USER_GET_CATEGORY, USER_GET_CATEGORY_FAILED } from '../constants/categoryConstants'

export const AddCategory=(categoryInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.post('/api/categories/add-category',categoryInfo,config)
          
            dispatch({type:CATEGORY_REQUEST})
           
                dispatch({
                    type:ADD_CATEGORY_SUCCESS,
                    payload:{
                        category:data,
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


export const getCategory=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get('/api/categories/get-category',config)
          
              
           
                dispatch({
                    type:GET_CATEGORY,
                    payload:{
                        category:data
                    }
              })
            
            setTimeout(()=>{ dispatch({type: CATEGORY_REQUEST})},1000)
        
        } catch (error) {
           
            dispatch({
                type:GET_CATEGORY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const userGetCategory=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const {data}=await axios.get('/api/categories/user-get-category',config)
          
              
           
                dispatch({
                    type:USER_GET_CATEGORY,
                    payload:{
                        category:data
                    }
              })
            
            setTimeout(()=>{ dispatch({type: CATEGORY_REQUEST})},1000)
        
        } catch (error) {
           
            dispatch({
                type:USER_GET_CATEGORY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}



export const countCategory=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get('/api/categories/count-category',config)
          
              
           
                dispatch({
                    type:COUNT_CATEGORY,
                    payload:{
                        category:data
                    }
              })
            
            setTimeout(()=>{ dispatch({type: CATEGORY_REQUEST})},1000)
        
        } catch (error) {
           
            dispatch({
                type:COUNT_CATEGORY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const getCategoryDetail=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get(`/api/categories/detail/${id}`,config)

        
           
                dispatch({
                    type:CATEGORY_DETAIL,
                    payload:{
                        categoryDetail:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:CATEGORY_DETAIL_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const EditCategory=(id,categoryInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.patch(`/api/categories/edit-category/${id}`,categoryInfo,config)
          
         
           
                dispatch({
                    type:EDIT_CATEGORY_SUCCESS,
                    payload:{
                        category:data,
                      success:data.message
                    }
              })
              
             setTimeout(()=>{
                dispatch({type:CATEGORY_REQUEST})
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
                type:EDIT_CATEGORY_FAILED,
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


export const EditCategoryImage=(id,categoryInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.patch(`/api/categories/edit-category-image/${id}`,categoryInfo,config)
          
         
           
                dispatch({
                    type:EDIT_IMAGE_CATEGORY,
                    payload:{
                        service:data,
                      success:data.message
                    }
              })
              
             setTimeout(()=>{
                dispatch({type:CATEGORY_REQUEST})
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
                type:EDIT_IMAGE_CATEGORY_FAILED,
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

export const deleteCategory=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.delete(`/api/categories/delete-category/${id}`,config)

              
            
                dispatch({
                    type:DELETE_CATEGORY,
                    payload:{
                        service:data
                    }
              })
            
          
              dispatch({type: CATEGORY_REQUEST})
        } catch (error) {
           
            dispatch({
                type:DELETE_CATEGORY_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}