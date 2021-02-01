
import userReducer from "./userReducer"
import {combineReducers} from "redux"

const allReducers = combineReducers({
  
    DATA: userReducer
})

export default allReducers