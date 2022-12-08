
export interface ISale {
    id: number,
    customer: string,
    product: string,
    price: number,
}

export interface IGetSales {
    sales: ISale[]
}

export interface IPostSale {
    customerName: string,
    productName: string,
    productPrice: number
}