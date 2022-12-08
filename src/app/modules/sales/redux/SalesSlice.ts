import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"
import { IGetSales, IPostSale, ISale } from "../../../models/SalesModels"
import * as apiServer from "./SalesCrud"

type SalesState = {
   loading: boolean
   totalCount: number,
   inProgress: boolean,
   entities?: IGetSales,
   selectedSale?: ISale,
   lastError: string
   changed:boolean
}

const initialState: SalesState = {
   loading: false,
   totalCount: 0,
   inProgress: false,
   entities: undefined,
   selectedSale: undefined,
   lastError: "",
   changed:false
}
export const GetSales = createAsyncThunk<IGetSales>(
   "sales/getSales",
   async (_, thunkApi) => {
      try {
         const response = await apiServer.GetAllSales();
         return response.data;
      } catch (error) {
         return thunkApi.rejectWithValue(error);
      }
   }
)
export const AddSale = createAsyncThunk<boolean, IPostSale>(
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
      }),
      builder.addCase(AddSale.fulfilled, (state, action) => {
         state.loading = false;
         state.lastError = '';
         state.changed = !state.changed;
         // eslint-disable-next-line 
      }),
       builder.addCase(AddSale.pending, (state, action) => {
         state.loading = true
         state.lastError = ''
      }),
      builder.addCase(AddSale.rejected, (state, action) => {
         state.loading = false
         state.lastError = ''
         state.lastError = action.error.message || 'went wrong'
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