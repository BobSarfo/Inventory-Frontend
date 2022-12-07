
import {combineReducers} from 'redux'
import { SalesSlice } from '../../app/modules/sales/redux/SalesSlice'


export const rootReducer = combineReducers({
  sales: SalesSlice.reducer
})

