import { SERVICE_DETAIL, SERVICE_REQUEST ,CLEAR_ERROR} from "../constants/servicesConstants"




const initialState={
    serviceDetail:'',
    error:'',
    loading:false
}


export const serviceDetailReducer=(state=initialState, action)=>{

    const {type, payload}=action

    switch (type) {
      
     
        case SERVICE_DETAIL:{
            return{
                ...state,
                serviceDetail:payload.serviceDetail,
                loading:false
            }
        }

        case SERVICE_REQUEST:{
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