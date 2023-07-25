import { CATEGORY_DETAIL, CATEGORY_REQUEST, CLEAR_ERROR } from "../constants/categoryConstants"





const initialState={
    categoryDetail:'',
    error:'',
    loading:false
}


export const  categoryDetailReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
      
     
        case CATEGORY_DETAIL:{
            return{
                ...state,
                categoryDetail:payload.categoryDetail,
                loading:false
            }
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