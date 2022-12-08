import React from 'react'
import { Card, Spinner } from 'react-bootstrap-v5'


export const LoadingPlaceholder = () => {
    return (
        <div>
            <Card.Body className='d-flex justify-content-center'>
                <Spinner animation="grow" className='text-end d-flex justify-content-between' />{"  "}
                {"  "} <h5 className='text-muted px-3 pt-1'>Loading ... please wait</h5>
            </Card.Body>
        </div>
    )
}
