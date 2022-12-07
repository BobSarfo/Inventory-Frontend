import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
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

const initialState:SalesState = {
    loading: false,
    totalCount: 0,
    inProgress: false,
    entities: undefined,
    selectedSale: undefined,
    lastError: ""
}

export const AddSale = createAsyncThunk<boolean,ISale>(
    "sales/addSale",
   async (data,thunkApi) => {
     try {
        const response = await apiServer.CreateSale(data);
        return response.data;
     } catch (error) {
        return thunkApi.rejectWithValue(error);
     }
   }
)


const SalesSlice = createSlice({
    name:"sales",
    initialState:initialState,
    reducers:{},
    extraReducers: (builder) =>{
        
    },
})