import { MAIL_REQUEST, SEND_MAIL_FAILED, SEND_MAIL_SUCCESS,CLEAR_SUCCESS,CLEAR_ERROR} from "../constants/mailConstants";

const initialState={
    message:'',
    success:'',
    error:'',
    loading:false
}

export const mailReducer=(state=initialState,action)=>{

    const {type,payload}=action
    switch (type) {
        case SEND_MAIL_SUCCESS:
               return{
                 ...state,
                 message: payload.message,
                 success: payload.success,
                 error:'',
                 loading: true
               }
            case MAIL_REQUEST:
                return{
                    ...state,
                    loading: false
                }
            case SEND_MAIL_FAILED:
                return{
                    ...state,
                 message: '',
                 error:payload.error,
                 loading: false
                }

                case CLEAR_SUCCESS:
                    return{
                        ...state,
                        success:"",
                        message:'',
                        loading:false
                    }
        
                    case CLEAR_ERROR:
                        return{
                            ...state,
                            error:""
                        }
                    
    
        default:
            return state;
    }
}