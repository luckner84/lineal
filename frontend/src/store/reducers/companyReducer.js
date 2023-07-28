
import { ADD_COMPANY_FAILED, ADD_COMPANY_SUCCESS, CLEAR_SUCCESS, CLEAR_ERROR, EDIT_COMPANY_SUCCESS, EDIT_COMPANY_FAILED, GET_COMPANY, GET_COMPANY_FAILED, COMPANY_DETAIL, COMPANY_DETAIL_FAILED, COMPANY_REQUEST, ADD_COMPANY_REQUEST, DELETE_COMPANY, DELETE_COMPANY_FAILED, EDIT_IMAGE_COMPANY, EDIT_IMAGE_COMPANY_FAILED, USER_GET_COMPANY, USER_GET_COMPANY_FAILED} from "../constants/companyConstant";

const initialState={
    company:[],
    success:'',
    error:'',
    loading:false
}


export const companyReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
        case ADD_COMPANY_SUCCESS:
               return{
                ...state,
                company: payload.company,
                success: payload.success,
                loading: true
               }
        case ADD_COMPANY_FAILED:
        return{
            ...state,
            company:'',
            loading:false,
            error: payload.error
        }


        case EDIT_COMPANY_SUCCESS:
            return{
             ...state,
             company: payload.company,
             success: payload.success,
             loading: true
            }
     case EDIT_COMPANY_FAILED:
     return{
         ...state,
         company:'',
         loading:false,
         error: payload.error
     }
     case EDIT_IMAGE_COMPANY:
        return{
         ...state,
         company: payload.company,
         success: payload.success,
         loading: true
        }
 case EDIT_IMAGE_COMPANY_FAILED:
 return{
     ...state,
     company:'',
     loading:false,
     error: payload.error
 }



     case GET_COMPANY:
        return{
         ...state,
         company:payload.company,
         loading:true
        }

        case USER_GET_COMPANY:
            return{
             ...state,
             company:payload.company,
             loading:true
            }
    
   
    case DELETE_COMPANY:
        
        return{
            ...state,
                company:{...state.company.filter(x=>x.compId!==payload)},
                error:"",
                loading: true
        }
        case GET_COMPANY_FAILED:
            return{
                ...state,
                company:'',
                loading:false,
                error: payload.error
            }

            case USER_GET_COMPANY_FAILED:
                return{
                    ...state,
                    company:'',
                    loading:false,
                    error: payload.error
                }
            case DELETE_COMPANY_FAILED:
                return{
                    ...state,
                    company:'',
                    loading:false,
                    error: payload.error
                }

        case COMPANY_REQUEST:{
            return{
                ...state,
                loading:false
            }
        }


        case ADD_COMPANY_REQUEST:{
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