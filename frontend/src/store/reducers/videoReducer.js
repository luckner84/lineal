
import {CLEAR_ERROR, CLEAR_SUCCESS, ADD_VIDEO_FAILED, ADD_VIDEO_SUCCESS, DELETE_VIDEO, DELETE_VIDEO_FAILED, GET_VIDEO, GET_VIDEO_FAILED, VIDEO_REQUEST} from "../constants/videoConstants"


const initialState={
    video:[],
    success:'',
    error:'',
    loading:false
}


export const videoReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
        case ADD_VIDEO_SUCCESS:
               return{
                ...state,
                video: payload.video,
                success: payload.success,
                loading: true
               }
        case ADD_VIDEO_FAILED:
        return{
            ...state,
            video:[],
            loading:false,
            error: payload.error
        }


     
     case GET_VIDEO:
        return{
         ...state,
         video:payload.video
        }

   
    case DELETE_VIDEO:
        
        return{
            ...state,
                video:{...state.video.filter(x=>x.videoId!==payload)},
                error:"",
                loading: true
        }
        case GET_VIDEO_FAILED:
            return{
                ...state,
                video:[],
                loading:false,
                error: payload.error
            }
            case DELETE_VIDEO_FAILED:
                return{
                    ...state,
                    video:[],
                    loading:false,
                    error: payload.error
                }

        case VIDEO_REQUEST:{
            return{
                ...state,
                loading:false
            }
        }


        

        case CLEAR_SUCCESS:
            return{
                ...state,
                success:"",
                video:[],
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