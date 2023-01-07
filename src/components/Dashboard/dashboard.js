import React from 'react';
import { CartesianGrid, Tooltip, Legend, Line, LineChart, XAxis, YAxis, AreaChart, Area, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {


    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]


    return (
        <div className='custom-container'>
            <div className='custom-padding custom-container2'>

                <div className='d-flex'>
                    <div className='custom-width'>


                        <h1 className='pt-4 welcome-dashboard'>My Dashboard</h1>
                        <p className='hi-dashboard'>Welcome back Nayeem, ready for another day of your UNI life?🔥</p>


                        <div className='d-flex mt-5'>
                            {/* <div className='d-flex align-items-center mb-5'>
                                <h3 className='active-dashboard mt-3'>Semester SGPA</h3>
                            </div> */}
                            <div>
                                <div className='' >
                                    <ResponsiveContainer className='check'>
                                        <LineChart
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 20,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />

                                        </LineChart>

                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* <div className='p-4'>
                                <h3 className='line-chart-text'>Investment VS Revenue</h3>
                                <AreaChart
                                    width={500}
                                    height={400}
                                    data={data}
                                    margin={{
                                        top: 10,
                                        right: 30,
                                        left: 0,
                                        bottom: 0,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="olive" fill="olive" />
                                </AreaChart>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <h3 className='pt-4 welcome-dashboard'>Upcoming</h3>
                        <div className='d-flex mt-3'>
                            <div className='me-4 d-flex align-items-center'>
                                <h3>Payment</h3>
                            </div>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <p class="title-card mt-3">29,872 TK</p>
                                        <p>Hover</p>
                                    </div>
                                    <div class="flip-card-back">
                                        <p class="title-card mt-3">Mid-Term</p>
                                        <p>22/2/23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;