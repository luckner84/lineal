
import {CLEAR_ERROR,CLEAR_SUCCESS ,ADD_SERVICE_FAILED, ADD_SERVICE_SUCCESS, DELETE_SERVICE, DELETE_SERVICE_FAILED, EDIT_SERVICE_FAILED, EDIT_SERVICE_SUCCESS, GET_SERVICE, GET_SERVICE_FAILED, SERVICE_REQUEST, EDIT_IMAGE_SERVICE, EDIT_IMAGE_SERVICE_FAILED, SERVICE_BY_CATEGORY, SERVICE_BY_CATEGORY_FAILED, USER_GET_SERVICE, USER_GET_SERVICE_FAILED } from "../constants/servicesConstants"


const initialState={
    service:[],
    success:'',
    error:'',
    loading:false
}


export const serviceReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
        case ADD_SERVICE_SUCCESS:
               return{
                ...state,
                service: payload.service,
                success: payload.success,
                loading: true
               }
        case ADD_SERVICE_FAILED:
        return{
            ...state,
            company:'',
            loading:false,
            error: payload.error
        }


        case EDIT_SERVICE_SUCCESS:
            return{
             ...state,
             service: payload.service,
             success: payload.success,
             loading: true
            }
     case EDIT_SERVICE_FAILED:
     return{
         ...state,
         service:'',
         loading:false,
         error: payload.error
     }

     case EDIT_IMAGE_SERVICE:
        return{
         ...state,
         service: payload.service,
         success: payload.success,
         loading: true
        }
 case EDIT_IMAGE_SERVICE_FAILED:
 return{
     ...state,
     service:'',
     loading:false,
     error: payload.error
 }


     case GET_SERVICE:
        return{
         ...state,
         service:payload.service,
         loading:true
        }

        case USER_GET_SERVICE:
            return{
             ...state,
             service:payload.service,
             loading:true
            }

        case SERVICE_BY_CATEGORY:
        return{
         ...state,
         service:payload.service,
         loading:true
        }

   
    case DELETE_SERVICE:
        
        return{
            ...state,
                service:{...state.service.filter(x=>x.serviceId!==payload)},
                error:"",
                loading: true
        }
        case GET_SERVICE_FAILED:
            return{
                ...state,
                service:'',
                loading:false,
                error: payload.error
            }

            case USER_GET_SERVICE_FAILED:
                return{
                    ...state,
                    service:'',
                    loading:false,
                    error: payload.error
                }

            case SERVICE_BY_CATEGORY_FAILED:
            return{
                ...state,
                service:'',
                loading:false,
                error: payload.error
            }
            case DELETE_SERVICE_FAILED:
                return{
                    ...state,
                    service:'',
                    loading:false,
                    error: payload.error
                }

        case SERVICE_REQUEST:{
            return{
                ...state,
                loading:false
            }
        }


        

        case CLEAR_SUCCESS:
            return{
                ...state,
                success:"",
                company:"",
                loading:false
            }

            case CLEAR_ERROR:
                return{
                    ...state,
                    error:""
                }
            
       default:
        return state
    }

}