import axios from "axios";
import { IGetSales, ISale } from "../../../models/SalesModels";

const server = process.env.REACT_APP_BACKEND_URL 
const GET_SALES_URL = `${server}/api/v1/sales`
const CREATE_SALE = `${server}/api/v1/sales`

export const GetAllSales = () => {
    return axios.get<IGetSales>(GET_SALES_URL);
}

export const CreateSale = (sale: ISale) => {
    return axios.post(CREATE_SALE, sale);
}