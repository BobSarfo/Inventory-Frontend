import axios from "axios";
import { IGetSales, ISale } from "../../../models/SalesModels";

export { }

const GET_LIST_URL = ""
const CREATE_SALE = ""

export const GetAllSales = () => {
    return axios.get<IGetSales>(GET_LIST_URL);
}

export const CreateSale = (sale: ISale) => {
    return axios.post(CREATE_SALE, sale);
}