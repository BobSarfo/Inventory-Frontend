import React, { useEffect } from 'react'
import { Button, Card, Table } from 'react-bootstrap-v5'
import { useAppDispatch, useAppSelector } from '../../../../setup/redux/Hooks'
import { LoadingPlaceholder } from '../../../_shared/components/LoadingPlaceholder'
import { GetSales } from '../redux/SalesSlice'

const SalesList = () => {
    const sales = useAppSelector((state) => state.sales)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(GetSales());
        // eslint-disable-next-line
    }, [])

    const handleShow = () => { }

    return (
        <div><Card className='border-0 pt-2'>
            <Card.Header>
                <div className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3'>Sales</span>
                    <span className='text-muted mt-1 fw-bold fs-7'> Total Sales: {sales.entities?.sales.length || 0}</span>
                </div>
                <div className='d-flex justify-content-end p-1'>
                    <Button onClick={handleShow} variant='primary'>Create Create </Button>
                </div>
            </Card.Header>

            <Card.Body className='py-2 ' >
                <div className='table-responsive overflow-visible'>
                    <Table bordered hover style={{ overflowX: "visible" }} className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-2' >
                        <thead>
                            <tr className='fw-bolder text-muted'>
                                <th className='w-15px'>#</th>
                                {/* <th className='min-w-110px'>Id</th> */}
                                <th className='min-w-80px'>Customer</th>
                                <th className='min-w-80px'>Product</th>
                                <th className='min-w-60px'>Price</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                (sales.entities?.sales === undefined ? [] : sales.entities?.sales).map((saleItem, index) => {

                                    return (
                                        <tr key={index} onClick={() => { }}>
                                            <td className='text-dark'>{index + 1}</td>
                                            {/* <td className='text-dark'>{saleItem.id}</td> */}
                                            <td className='text-dark'>{saleItem.customer}</td>
                                            <td className='text-dark'>{saleItem.product}</td>
                                            <td className='text-dark'>{saleItem.price}</td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    {sales.loading && <LoadingPlaceholder />}
                    {
                        (sales.entities?.sales.length === 0 && !sales.loading) &&
                        <>
                            <div className='pt-4 d-flex justify-content-center '>
                                {"  "} <h5 className='text-dark  px-3 pt-1'>No data available ...</h5>
                            </div>
                        </>
                    }
                </div>

                <br />
            </Card.Body>

        </Card></div>
    )
}

export default SalesList