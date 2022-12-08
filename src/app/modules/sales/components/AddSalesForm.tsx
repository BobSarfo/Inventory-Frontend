import React from 'react'
import * as Yup from 'yup'
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik'
import { useAppDispatch } from '../../../../setup/redux/Hooks';
import { IPostSale } from '../../../models/SalesModels';
import { AddSale } from '../redux/SalesSlice';
import { Button, Card, Col, Row } from 'react-bootstrap-v5';

const AddSalesForm = () => {
  const dispatch = useAppDispatch();

  let initialFormValues: IPostSale = {
    customerName: "",
    productName: "",
    productPrice: 0,
  }

  const formSubmit = (values: IPostSale, actions: FormikValues) => {
    dispatch(AddSale(values))
    // dispatch(setEditMode(false))
    actions.resetForm()
  }


  const schema = Yup.object({
    customerName: Yup.string().required().label('Customer Name'),
    productName: Yup.string().required().label('Product Name'),
    productPrice: Yup.number().min(0).required().label('Price'),
  });

  return (
    <div> <Card>
      <div className='fw-bold fs-5 m-3'>
        Add New Sale
      </div>
      <div className="vr" />
      <Card.Body>
        <Formik enableReinitialize validationSchema={schema} initialValues={initialFormValues} onSubmit={formSubmit}>
          <Form>
            <>
              <div >
                <label className='d-flex align-items-center form-label'>
                  Edit As prefered
                </label>

                <div className='mb-2'>
                  <div className='form-text'>
                    Customer Name
                  </div>
                  <Field
                    name='customerName'
                    type='text'
                    placeholder="Product Name"
                    className='form-control form-control'
                  />
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='customerName' />
                  </div>
                </div>


                <div className='mb-2'>
                  <div className='form-text'>
                    Product Price
                  </div>
                  <Field
                    name='productPrice'
                    type='text'
                    placeholder="Product Price"
                    className='form-control form-control'
                  />
                  <div className='text-danger mt-1'>
                    <ErrorMessage name='productPrice' />
                  </div>
                </div>


                <div className='mb-5'>
                  <div className='form-text'>
                    Product Name (Select from list below)
                  </div>
                  <Field
                    as='select'
                    name={`productName`}
                    className='form-select form-select form-select-solid'
                  >
                    <option></option>
                    <option value='laptop'>laptop</option>
                    <option value='keyboard'>keyboard</option>
                    <option value='paper'>paper </option>
                    <option value='ruler'>ruler </option>
                    <option value='mouse'>mouse </option>
                  </Field>
                  <div className='text-danger mt-2'>
                    <ErrorMessage name='productName' />
                  </div>
                </div>
              </div>
            </>
            <Row className='justify-content-end'>
              <Col sm={4}>
                <Button variant="danger" type='reset'>
                  Cancel
                </Button>
              </Col>
              <Col xs={{ span: 4, offset: 4 }}>
                <Button variant="success" type='submit'>
                  Save
                </Button>
              </Col>
            </Row>

          </Form>
        </Formik>

      </Card.Body>

    </Card>
    </div>
  )
}



export default AddSalesForm