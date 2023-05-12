import React, { useEffect, useState } from 'react';
import './Payment.css'
import axios from 'axios';
import { Pagination, Spinner, Table } from 'react-bootstrap';

const Payment = () => {

    const [data, setData] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const getdata = async () => {
        // const response = await axios.get("https://dummyjson.com/products");
        // setData(response.data.products)

        const response = await axios.get("transactions.json");
        setData(response.data.transactions)
    }

    // handle next
    const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1)
    }

    // handle previous
    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1)
    }

    useEffect(() => {
        getdata()
    }, [page])

    useEffect(() => {
        const pagedatacount = Math.ceil(data.length / 5);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 5;
            const skip = LIMIT * page // 5 *2 = 10
            const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip)
        }
    }, [data])

    return (
        <div className='custom-container payment'>
            <div className='custom-padding custom-container2'>
                <div className='custom-width'>
                    <div className='payment-details d-flex'>
                        <div>
                            <h2 className='mt-1'>Payment Details</h2>
                            <div className='d-flex'>
                                <div className='payment-first-first-section payment-first-section'>
                                    <i class="fa-solid fa-wallet"></i>
                                    <h5>Payable</h5>
                                    <h3>৳781,020.00</h3>
                                </div>
                                <div className='payment-first-second-section payment-first-section'>
                                    <i class="fa-solid fa-hand-holding-dollar"></i>
                                    <h5>Paid</h5>
                                    <h3>৳736,470.01</h3>
                                </div>
                                <div className='payment-first-third-section payment-first-section'>
                                    <i class="fa-solid fa-piggy-bank"></i>
                                    <h5>Semester Due</h5>
                                    <h3>৳43,529.99</h3>
                                </div>
                            </div>
                            <div>
                                <>
                                    <div className="container">
                                        <h1>User Data</h1>

                                        <div className='table_div mt-3'>
                                            <Table striped bordered hover>
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Price</th>
                                                        <th>Title</th>
                                                        <th>body</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        pageData.length > 0 ?
                                                            pageData.map((element, index) => {
                                                                return (
                                                                    <>
                                                                        <tr>
                                                                            <td>{element.id}</td>
                                                                            <td>{element.paymentType}</td>
                                                                            <td>{element.title.slice(0, 10)}</td>
                                                                            {/* <td><img src={element.thumbnail} style={{ width: 60, height: 60 }} alt="" /></td> */}
                                                                            <td>{element.tutionFee}</td>
                                                                        </tr>
                                                                    </>
                                                                )
                                                            }) : <div className='d-flex justify-content-center mt-4'>
                                                                Loading... <Spinner animation="border" variant='danger' />
                                                            </div>
                                                    }

                                                </tbody>
                                            </Table>
                                        </div>
                                        <div className='d-flex justify-content-end'>
                                            <Pagination>

                                                <Pagination.Prev onClick={handlePrevios} disabled={page === 1} />
                                                {
                                                    Array(pageCount).fill(null).map((ele, index) => {
                                                        return (
                                                            <>
                                                                <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>
                                                            </>
                                                        )
                                                    })
                                                }
                                                <Pagination.Next onClick={handleNext} disabled={page === pageCount} />
                                            </Pagination>
                                        </div>
                                    </div>
                                </>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h2 className='mt-1 upcoming-payment-text'>Upcoming Payment</h2>
                                <div className='payment-first-fourth-section payment-first-section-different'>
                                    <i class="fa-solid fa-money-check-dollar"></i>
                                    <h5>Upcoming Payment</h5>
                                    <h3 className='upcoming-payment'>৳21,805.49</h3>
                                    <h5 className='upcoming-payment-last-date'>Last Date: 31 December</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;