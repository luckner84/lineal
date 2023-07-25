import { ADD_CATEGORY_FAILED, ADD_CATEGORY_SUCCESS, CATEGORY_REQUEST, CLEAR_ERROR, CLEAR_SUCCESS, DELETE_CATEGORY, DELETE_CATEGORY_FAILED, EDIT_CATEGORY_FAILED, EDIT_CATEGORY_SUCCESS, EDIT_IMAGE_CATEGORY, EDIT_IMAGE_CATEGORY_FAILED, GET_CATEGORY, GET_CATEGORY_FAILED } from "../constants/categoryConstants"


const initialState={
    category:[],
    success:'',
    error:'',
    loading:false
}


export const categoryReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
        case ADD_CATEGORY_SUCCESS:
               return{
                ...state,
                category: payload.category,
                success: payload.success,
                loading: true
               }
        case ADD_CATEGORY_FAILED:
        return{
            ...state,
            category:[],
            loading:false,
            error: payload.error
        }


        case EDIT_CATEGORY_SUCCESS:
            return{
             ...state,
             category: payload.category,
             success: payload.success,
             loading: true
            }
     case EDIT_CATEGORY_FAILED:
     return{
         ...state,
         category:[],
         loading:false,
         error: payload.error
     }
     case EDIT_IMAGE_CATEGORY:
        return{
         ...state,
         category: payload.category,
         success: payload.success,
         loading: true
        }
 case EDIT_IMAGE_CATEGORY_FAILED:
 return{
     ...state,
     category:[],
     loading:false,
     error: payload.error
 }



     case GET_CATEGORY:
        return{
         ...state,
         category:payload.category
        }

        
    
    case DELETE_CATEGORY:
        
        return{
            ...state,
            category:{...state.category.filter(x=>x.categoryId!==payload)},
                error:"",
                loading: true
        }
        case GET_CATEGORY_FAILED:
            return{
                ...state,
                category:[],
                loading:false,
                error: payload.error
            }
            case DELETE_CATEGORY_FAILED:
                return{
                    ...state,
                    category:[],
                    loading:false,
                    error: payload.error
                }

        case CATEGORY_REQUEST:{
            return{
                ...state,
                loading:false
            }
        }



        case CLEAR_SUCCESS:
            return{
                ...state,
                success:"",
                category:[],
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