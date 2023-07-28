import axios from 'axios'
import { ADD_VIDEO_SUCCESS, VIDEO_REQUEST, CLEAR_SUCCESS, CLEAR_ERROR, GET_VIDEO, GET_VIDEO_FAILED, VIDEO_DETAIL, VIDEO_DETAIL_FAILED, DELETE_VIDEO, DELETE_VIDEO_FAILED } from '../constants/videoConstants'

export const AddVideo=(videoInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/x-www-form-urlencoded',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.post('/api/videos/add-video',videoInfo,config)
          
            dispatch({type:VIDEO_REQUEST})
           
                dispatch({
                    type:ADD_VIDEO_SUCCESS,
                    payload:{
                        video:data,
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
           },2000)
        }
    }
}


export const getVideo=()=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const {data}=await axios.get('/api/videos/get-video',config)
          
            
           
                dispatch({
                    type:GET_VIDEO,
                    payload:{
                        video:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:GET_VIDEO_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}


export const getVideoDetail=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.get(`/api/videos/detail/${id}`,config)

        
           
                dispatch({
                    type:VIDEO_DETAIL,
                    payload:{
                        videoDetail:data
                    }
              })
            
           
        
        } catch (error) {
           
            dispatch({
                type:VIDEO_DETAIL_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}




export const deleteVideo=(id)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json',
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('adminInfo'))
                }
            }
            const {data}=await axios.delete(`/api/videos/delete-video/${id}`,config)

        
           
                dispatch({
                    type:DELETE_VIDEO,
                    payload:{
                        video:data
                    }
              })
            dispatch({type: VIDEO_REQUEST})
           
        
        } catch (error) {
           
            dispatch({
                type:DELETE_VIDEO_FAILED,
                payload:{
                  error:error.response.data.message
                }
          })

         
        }
}}