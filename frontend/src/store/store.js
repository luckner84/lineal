import {createStore,combineReducers,applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import { adminDetailReducer, editUserReducer, registerReducer } from './reducers/registerReducer';
import {loginReducer} from './reducers/loginReducer'
import { companyReducer } from './reducers/companyReducer';
import alertSlice from './reducers/alertSlice';
import { companyDetailReducer } from './reducers/companyDetailReducer';
import { serviceReducer } from './reducers/serviceReducer';
import { videoReducer } from './reducers/videoReducer';
import { serviceDetailReducer } from './reducers/serviceDetailReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { categoryDetailReducer } from './reducers/categoryDetailReducer';
import { countReducer } from './reducers/countReducer';
import { mailReducer } from './reducers/mailReducer';
const rootReducer = combineReducers({
  
  register: registerReducer,
  auth:loginReducer,
  edit: editUserReducer,
  detail:adminDetailReducer,
  companyInfo:companyReducer,
  compDetail: companyDetailReducer,
  alerts: alertSlice,
  services: serviceReducer,
  serviceDetails: serviceDetailReducer,
  videos:videoReducer,
  categories:categoryReducer,
  categoryDetails:categoryDetailReducer,
  countCategory: countReducer,
  sendMail: mailReducer
})



const initialState={
     

}

const middleware = [thunk];

const store = createStore(
     rootReducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware)

));

export default store