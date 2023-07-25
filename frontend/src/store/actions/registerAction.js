import axios from 'axios'
import {ADMIN_DETAIL_FAILED, ADMIN_DETAIL_REQUEST, ADMIN_DETAIL_SUCCESS, CLEAR_ERROR, CLEAR_SUCCESS,EDIT_ADMIN_FAILED,EDIT_ADMIN_REQUEST,EDIT_ADMIN_SUCCESS,REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS} from '../constants/authConstants'


export const setRegistration=(userInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const response=await axios.post('/api/users/new-user',userInfo,config)
          
            dispatch({type:REGISTER_REQUEST})
           
                dispatch({
                    type:REGISTER_SUCCESS,
                    payload:{
                        user:response.data,
                      success:response.data.message
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
                type:REGISTER_FAILED,
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


export const editAdminInfo=(userId,userInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("adminInfo"))}`,
                }
            }
            const response=await axios.patch(`/api/users/edit-user/${userId}`,userInfo,config)
            localStorage.setItem('adminInfo', JSON.stringify(response.data.token))
            dispatch({type:EDIT_ADMIN_REQUEST})
           
                dispatch({
                    type:EDIT_ADMIN_SUCCESS,
                    payload:{
                        user:response.data,
                      success:response.data.message
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
                type:EDIT_ADMIN_FAILED,
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

export const getAdminDetail=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("adminInfo"))}`,
                }
            }
            const response=await axios.get(`/api/users/single/${id}`,config)
          
         
           
                dispatch({
                    type:ADMIN_DETAIL_SUCCESS,
                    payload:{
                        user:response.data
                    }
              })
            setTimeout( ()=>{dispatch({type:ADMIN_DETAIL_REQUEST})},1000)


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
                type:ADMIN_DETAIL_FAILED,
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