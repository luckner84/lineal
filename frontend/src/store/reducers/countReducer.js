import {CATEGORY_REQUEST, CLEAR_ERROR, COUNT_CATEGORY, COUNT_CATEGORY_FAILED } from "../constants/categoryConstants"





const initialState={
    count:'',
    error:'',
    loading:false
}


export const  countReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
      
     
        case COUNT_CATEGORY:
        return{
         ...state,
         category:payload.category
        }

        case COUNT_CATEGORY_FAILED:
            return{
                ...state,
                category:'',
                loading:false,
                error: payload.error
            }



        case CATEGORY_REQUEST:{
            return{
                ...state,
                loading:true
            }
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