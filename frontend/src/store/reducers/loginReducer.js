import {CLEAR_ERROR,CLEAR_SUCCESS, DELETE_ACCOUNT_FAILED, DELETE_ACCOUNT_SUCCESS, LOGIN_FAILED,LOGIN_REQUEST,LOGIN_SUCCESS, USER_LOGOUT, USER_LOGOUT_FAILED} from "../constants/authConstants";
import deCodeToken from 'jwt-decode'


const initialState={
       adminInfo:"",
       success:"",
       error:"",
       authenticate: false,
       loading:false
}


const tokenDecode = (token) =>{
    const tokenDecoded = deCodeToken(token);
    const expTime = new Date(tokenDecoded.exp*1000);
    if(new Date() > expTime){
         return null;
    }
    return tokenDecoded;

}

const getToken = JSON.parse(localStorage.getItem('adminInfo'));
if(getToken){
    const getInfo = tokenDecode(getToken);
    if(getInfo){
         initialState.adminInfo = getInfo;
         initialState.authenticate = true;
         initialState.loading=true
        
    }
}


export const loginReducer=(state=initialState,action)=>{

       const {type,payload}=action

       switch (type) {
              case LOGIN_SUCCESS:
                const user=tokenDecode(payload.adminInfo)
                     return{
                        ...state,
                        authenticate: true,
                        adminInfo: user,
                        success: payload.success,
                        error:'',
                        loading:true
                     }
                     case LOGIN_REQUEST:
                            return{
                                   ...state,
                                   loading:false
                            }
                     case USER_LOGOUT:
                            return{
                                ...state,
                                authenticate: false,
                                error:'',
                                adminInfo:'',
                                loading:false
                            }
                        case USER_LOGOUT_FAILED:
                            return{
                                
                                authenticate: false,
                                error: payload.error,
                                loading:false
                            }


                            case DELETE_ACCOUNT_SUCCESS:
                
                return{
                    ...state,
                    adminInfo: payload.adminInfo,
                    authenticate: false,
                    error:'',
                    success: payload.success,
                    loading:false
                }


                case DELETE_ACCOUNT_FAILED:
                    return{
                        ...state,
                        error: payload.error,
                        loading:false
                       
                    }
            
              case LOGIN_FAILED:{
                     return{
                            ...state,
                            error: payload.error
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

