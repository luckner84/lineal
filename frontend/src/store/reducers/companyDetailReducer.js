
import {CLEAR_ERROR, COMPANY_DETAIL,COMPANY_REQUEST} from "../constants/companyConstant";

const initialState={
    companyDetail:'',
    error:'',
    loading:false
}


export const companyDetailReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
      
     
        case COMPANY_DETAIL:{
            return{
                ...state,
                companyDetail:payload.companyDetail,
                loading:false
            }
        }

        case COMPANY_REQUEST:{
            return{
                ...state,
                loading:false
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