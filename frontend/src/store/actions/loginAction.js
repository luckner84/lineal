import axios from 'axios'
import {CLEAR_ERROR, CLEAR_SUCCESS,DELETE_ACCOUNT_FAILED,DELETE_ACCOUNT_SUCCESS,LOGIN_FAILED,LOGIN_REQUEST,LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_FAILED} from '../constants/authConstants';



export const setLogin=(userInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
           
            const response=await axios.post('/api/users/login',userInfo,config)
            localStorage.setItem('adminInfo',JSON.stringify(response.data.token))
            dispatch({type:LOGIN_REQUEST})
           
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:{
                        adminInfo:response.data.token,
                      success:response.data.message
                    }
              })
           
              setTimeout(()=>{
                dispatch({
                    type: LOGIN_REQUEST})
               },1000)

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
                type:LOGIN_FAILED,
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

export const userLogout=()=>{
    return (dispatch)=>{
        try {
            localStorage.removeItem('adminInfo')
            dispatch({
                type: USER_LOGOUT
            })
            
        } catch (error) {
            dispatch({
                type: USER_LOGOUT_FAILED,
                error: error.response.data.message
            })
           
        }
    }
}

export const deleteAccount=()=>{
    return async(dispatch)=>{
        const adminInfo= JSON.parse(localStorage.getItem('adminInfo'))
        const config={
            headers:{
                'Content-Type':'application/json',
                Authorization: 'Bearer '+ adminInfo
            }
        }
        try {
          const response= await axios.delete('/api/users/delete-user',config)
          localStorage.removeItem('adminInfo')
          dispatch({
            type: DELETE_ACCOUNT_SUCCESS,
              payload:{
                adminInfo: response.data.user,
                success: response.data.message
              }
          })

          setTimeout(()=>{
            dispatch({
                type: CLEAR_SUCCESS
            })
           },2000)
        setTimeout(()=>{
            dispatch({
                type: CLEAR_ERROR
            })
           },2000)
            
        } catch (error) {
            dispatch({
                type: DELETE_ACCOUNT_FAILED,
                error: error.response.data.message
            })  
        }
        setTimeout(()=>{
            dispatch({
                type: CLEAR_ERROR
            })
        },2000)
    }
}
