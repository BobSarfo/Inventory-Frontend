import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { IGetSales, ISale } from "../../../models/SalesModels"
import * as apiServer from "./SalesCrud"

type SalesState = {
   loading: boolean
   totalCount: number,
   inProgress: boolean,
   entities?: IGetSales,
   selectedSale?: ISale,
   lastError: string
}

const initialState: SalesState = {
   loading: false,
   totalCount: 0,
   inProgress: false,
   entities: undefined,
   selectedSale: undefined,
   lastError: ""
}
export const GetSales = createAsyncThunk<IGetSales>(
   "sales/addSale",
   async (_, thunkApi) => {
      try {
         const response = await apiServer.GetAllSales();
         return response.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error);
      }
   }
)
export const AddSale = createAsyncThunk<boolean, ISale>(
   "sales/addSale",
   async (data, thunkApi) => {
      try {
         const response = await apiServer.CreateSale(data);
         return response.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error);
      }
   }
)


export const SalesSlice = createSlice({
   name: "sales",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => (

      builder.addCase(GetSales.fulfilled, (state, action) => {
         state.loading = false;
         state.lastError = '';
         state.entities = action.payload;
         // eslint-disable-next-line 
      }),
       builder.addCase(GetSales.pending, (state, action) => {
         state.loading = true
         state.lastError = ''
         state.entities = action.payload
      }),
      builder.addCase(GetSales.rejected, (state, action) => {
         state.loading = false
         state.lastError = ''
         state.lastError = action.error.message || 'Something went wrong'
         toast.error("Failed! " + String(action.payload) || 'Something went wrong', {
            style: {
               border: '1px solid #bd1200',
               padding: '16px',
               backgroundColor: '#ffdada',
            }
         })
      })
   ),
})