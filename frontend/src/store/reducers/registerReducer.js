import {ADMIN_DETAIL_FAILED, ADMIN_DETAIL_SUCCESS, CLEAR_ERROR,CLEAR_SUCCESS, EDIT_ADMIN_FAILED, EDIT_ADMIN_SUCCESS, REGISTER_FAILED, REGISTER_SUCCESS} from "../constants/authConstants";

const initialState={
       user:"",
       success:"",
       error:"",
       loading:false
}


export const registerReducer=(state=initialState,action)=>{

       const {type,payload}=action

       switch (type) {
              case REGISTER_SUCCESS:
                     return{
                        ...state,
                        user: payload.user,
                        success: payload.success,
                        error:'',
                        loading:true
                     }
            
              case REGISTER_FAILED:{
                     return{
                            ...state,
                            error: payload.error,
                            loading:false
                     }
              }
              case CLEAR_ERROR:{
                     return{
                            ...state,
                             error:""
                     }
              }
              case CLEAR_SUCCESS:{
                     return{
                            ...state,
                             success:""
                     }
              }
              
       
              default:
                return state;
       }
}


export const editUserReducer=(state=initialState,action)=>{

       const {type,payload}=action

       switch (type) {
              case EDIT_ADMIN_SUCCESS:
                     return{
                        ...state,
                        user: payload.user,
                        success: payload.success,
                        error:'',
                        loading:true
                     }
            
              case EDIT_ADMIN_FAILED:{
                     return{
                            ...state,
                            error: payload.error,
                            loading:false
                     }
              }
              case CLEAR_ERROR:{
                     return{
                            ...state,
                             error:""
                     }
              }
              case CLEAR_SUCCESS:{
                     return{
                            ...state,
                             success:""
                     }
              }
              
       
              default:
                return state;
       }
}


export const adminDetailReducer=(state=initialState,action)=>{

       const {type,payload}=action

       switch (type) {
              case ADMIN_DETAIL_SUCCESS:
                     return{
                        ...state,
                        user: payload.user,
                        error:'',
                        loading:true
                     }
            
              case ADMIN_DETAIL_FAILED:{
                     return{
                            ...state,
                            error: payload.error,
                            loading:false
                     }
              }
              case CLEAR_ERROR:{
                     return{
                            ...state,
                             error:""
                     }
              }
              case CLEAR_SUCCESS:{
                     return{
                            ...state,
                             success:""
                     }
              }
              
       
              default:
                return state;
       }
}