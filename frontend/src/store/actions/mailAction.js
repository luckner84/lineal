import axios from 'axios'
import { CLEAR_ERROR, CLEAR_SUCCESS, MAIL_REQUEST, SEND_MAIL_SUCCESS } from '../constants/mailConstants'

export const sendMail=(messageInfo)=>{

    return async(dispatch)=>{

       

        try {
            const config={
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const {data}=await axios.post('/api/mails/send-email',messageInfo,config)
          
            dispatch({type:MAIL_REQUEST})
           
                dispatch({
                    type:SEND_MAIL_SUCCESS,
                    payload:{
                        message:data,
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















