import React from 'react';
import { CartesianGrid, Tooltip, Legend, Line, LineChart, XAxis, YAxis, AreaChart, Area, ResponsiveContainer } from 'recharts';
import './Dashboard.css';
import study from '../../resources/others/study.png'
import teacherImg1 from '../../resources/teachersImages/img1.png'
import teacherImg2 from '../../resources/teachersImages/img2.png'
import teacherImg3 from '../../resources/teachersImages/img3.png'
import teacherImg4 from '../../resources/teachersImages/img4.png'
import teacherImg5 from '../../resources/teachersImages/img5.png'
import teacherImg6 from '../../resources/teachersImages/img6.png'


const Dashboard = () => {


    // const data = [
    //     {
    //         "semester": "Fall 2019",
    //         "investment": 100000,
    //         "CGPA": 3.33,
    //         "revenue": 10401
    //     },
    //     {
    //         "semester": "Spring 2020",
    //         "investment": 200000,
    //         "CGPA": 3.86,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Summer 2020",
    //         "investment": 200000,
    //         "CGPA": 3.86,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Fall 2020",
    //         "investment": 200000,
    //         "CGPA": 3.79,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Spring 2021",
    //         "investment": 200000,
    //         "CGPA": 3.79,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Summer 2021",
    //         "investment": 200000,
    //         "CGPA": 3.81,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Fall 2021",
    //         "investment": 200000,
    //         "CGPA": 3.95,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Spring 2022",
    //         "investment": 200000,
    //         "CGPA": 3.60,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Fall 2022",
    //         "investment": 200000,
    //         "CGPA": 3.12,
    //         "revenue": 24500
    //     },
    // ]


    const data = [
        {
            "semester": "Fall 19",
            "investment": 100000,
            "CGPA": 2.33,
            "revenue": 10401
        },
        {
            "semester": "Spring 20",
            "investment": 200000,
            "CGPA": 2.86,
            "revenue": 24500
        },
        {
            "semester": "Summer 20",
            "investment": 200000,
            "CGPA": 2.56,
            "revenue": 24500
        },
        {
            "semester": "Fall 20",
            "investment": 200000,
            "CGPA": 3.20,
            "revenue": 24500
        },
        {
            "semester": "Spring 21",
            "investment": 200000,
            "CGPA": 3.00,
            "revenue": 24500
        },
        {
            "semester": "Summer 21",
            "investment": 200000,
            "CGPA": 3.81,
            "revenue": 24500
        },
        {
            "semester": "Fall 21",
            "investment": 200000,
            "CGPA": 2.22,
            "revenue": 24500
        },
        {
            "semester": "Spring 22",
            "investment": 200000,
            "CGPA": 2.90,
            "revenue": 24500
        },
        {
            "semester": "Fall 22",
            "investment": 200000,
            "CGPA": 3.12,
            "revenue": 24500
        }
    ]


    return (
        <div className='custom-container dashboard'>
            <div className='custom-padding custom-container2'>


                <div className=''>
                    <div className='custom-width'>

                        {/* 1st section start  */}
                        <div className='d-flex dashboard-first-section'>
                            <div className='d-flex dashboard-first-first-section justify-content-between flex-wrap'>
                                <div className='dashboard-profile-detail'>
                                    <h3>Your Profile</h3>
                                    <p><span>Hi Nayeem.</span> You have completed <span>70%</span> of your weekly targets. Keep learning with us like this.</p>
                                    <button>View Profile</button>
                                </div>
                                <div>
                                    <img className='study-img' src={study} alt="" />
                                </div>
                            </div>
                            <div className='dashboard-first-second-section'>
                                <div>
                                    <div className='upcoming-one'>
                                        <h3>Web Engineering Quiz <br /><span><i className="fa-regular fa-clock"></i> 25, Feb, 2023. 04:00 PM</span></h3>
                                    </div>
                                    <div className='upcoming-two'>
                                        <h3>Artificial Intelligence Quiz <br /><span><i className="fa-regular fa-clock"></i> 12, March, 2023. 01:00 PM</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 1st section end  */}


                        {/* 2nd section start  */}
                        <div>
                            <div className='d-flex dashboard-second-section'>
                                <div className='dashboard-second-first-section'>
                                    <h4>Your Progress</h4>
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th className='dashboard-1st-th'>Subject</th>
                                                <th>Progress</th>
                                                <th className='dashboard-3rd-th'>Remaining</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Information Security</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                                    </div>
                                                </td>
                                                <td>3 Classes</td>
                                            </tr>
                                            <tr>
                                                <td>Artificial Intelligence</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-info progress-bar-striped progress-bar-animated progress-bar-2" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                                                    </div>
                                                </td>
                                                <td>4 Classes</td>
                                            </tr>
                                            <tr>
                                                <td>Principles of Robotics</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                                                    </div>
                                                </td>
                                                <td>4 Classes</td>
                                            </tr>
                                            <tr>
                                                <td>Web Engineering</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated progress-bar-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                                    </div>
                                                </td>
                                                <td>3 Classes</td>
                                            </tr>
                                            <tr>
                                                <td>Web Engineering Lab</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated progress-bar-4" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
                                                    </div>
                                                </td>
                                                <td>1 Class</td>
                                            </tr>
                                            <tr>
                                                <td>Digital Image Processing</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated progress-bar-5" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">66%</div>
                                                    </div>
                                                </td>
                                                <td>3 Classes</td>
                                            </tr>
                                            <tr>
                                                <td>Software Project VI</td>
                                                <td>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-success progress-bar-striped progress-bar-animated w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                                                    </div>
                                                </td>
                                                <td>2 Classes</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                <div className='dashboard-second-second-section'>
                                    <h4>Assignments</h4>
                                    <div className='assignments'>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex assignment-name'>
                                                <i className="fa-regular fa-file-word"></i>
                                                <h5>Java Programming <br /><span>.doc, 4.3 MB</span></h5>
                                            </div>
                                            <div><i className="fa-regular fa-trash-can assignment-icon-2"></i><i className="fa-regular fa-circle-down assignment-icon-3"></i></div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex assignment-name'>
                                                <i className="far fa-file-excel excel-icon"></i>
                                                <h5>Angular Theory <br /><span>.xls, 2.5 MB</span></h5>
                                            </div>
                                            <div><i className="fa-regular fa-trash-can assignment-icon-2"></i><i className="fa-regular fa-circle-down assignment-icon-3"></i></div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex assignment-name'>
                                                <i className="far fa-file-pdf adobe-icon"></i>
                                                <h5>Maths Sums Solution <br /><span>.pdf, 10.5 MB</span></h5>
                                            </div>
                                            <div><i className="fa-regular fa-trash-can assignment-icon-2"></i><i className="fa-regular fa-circle-down assignment-icon-3"></i></div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex assignment-name'>
                                                <i className="far fa-file-archive archive-icon"></i>
                                                <h5>Submit Science Journal <br /><span>.zip, 53.2 MB</span></h5>
                                            </div>
                                            <div><i className="fa-regular fa-trash-can assignment-icon-2"></i><i className="fa-regular fa-circle-down assignment-icon-3"></i></div>
                                        </div>
                                        <hr />
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex assignment-name'>
                                                <i className="fa-regular fa-file-word"></i>
                                                <h5>Marketing Instructions <br /><span>.doc, 5.3 MB</span></h5>
                                            </div>
                                            <div><i className="fa-regular fa-trash-can assignment-icon-2"></i><i className="fa-regular fa-circle-down assignment-icon-3"></i></div>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className='d-flex justify-content-center'>
                                        <button>Report Adverse Effect</button>
                                    </div>
                                </div>
                                <div className='dashboard-second-third-section'>
                                    <h4>Upcoming Class</h4>
                                    <div className='upcoming-class'>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg1} alt="" />
                                                <h5>Fahad Faysal <br /><span>Artificial Intelligence</span></h5>
                                            </div>
                                            <div><h5>12 June '20<br /><span>09:00-10:30</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg2} alt="" />
                                                <h5>Tajmery Mahfuz <br /><span>Software Project VI</span></h5>
                                            </div>
                                            <div><h5>13 June '20<br /><span>11:00-12:30</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg3} alt="" />
                                                <h5>Touhid Bhuiyan <br /><span>Information Security</span></h5>
                                            </div>
                                            <div><h5>15 June '20<br /><span>09:30-11:00</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg4} alt="" />
                                                <h5>Sharmin Akter Rima <br /><span>Web Engineering</span></h5>
                                            </div>
                                            <div><h5>16 June '20<br /><span>13:30-15:00</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg5} alt="" />
                                                <h5>Dr. Bimal Das <br /><span>Principles of Robotics</span></h5>
                                            </div>
                                            <div><h5>18 June '20<br /><span>11:00-12:30</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg6} alt="" />
                                                <h5>Narayan Chakraborty <br /><span>Digital Image Processing</span></h5>
                                            </div>
                                            <div><h5>22 June '20<br /><span>13:00-14:30</span></h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd section end  */}



                        {/* 3rd section start  */}
                        <div className='dashboard-third-section'>
                            <div className='dashboard-line-chart' >
                                <h4>CGPA</h4>
                                <ResponsiveContainer className='dashboard-line-chart-1'>
                                    <LineChart
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 0,
                                            left: -28,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="semester" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="CGPA" stroke="#1d40fb" activeDot={{ r: 8 }} />

                                    </LineChart>

                                </ResponsiveContainer>
                                <p className='fig-cgpa'>CGPA</p>
                            </div>
                        </div>
                        {/* 3rd section end  */}

                        {/* <p className='custom-padding-2 hi-dashboard'>Hi Nayeem</p>
                        <h1 className='welcome-dashboard'>Welcome to Dashboard</h1>



                        <div className='d-flex'>
                            <div className='d-flex align-items-center mb-5'>
                                <h3 className='active-dashboard mt-3'>Semester SGPA</h3>
                            </div>
                            <div>
                                <div className='line-chart-1' >
                                    <ResponsiveContainer className='line-chart'>
                                        <LineChart
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 0,
                                                left: -28,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="semester" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="CGPA" stroke="#1d40fb" activeDot={{ r: 8 }} />

                                        </LineChart>

                                    </ResponsiveContainer>
                                    <p className='fig-cgpa'>CGPA</p>
                                </div>
                                <div className='line-chart-2' >
                                    <ResponsiveContainer className='line-chart'>
                                        <LineChart
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 20,
                                                left: -28,
                                                bottom: 5,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="semester" ticks={[1.2, 2.8, 4.4, 6]} />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="CGPA" stroke="#1d40fb" activeDot={{ r: 8 }} />

                                        </LineChart>

                                    </ResponsiveContainer>
                                    <p className='fig-cgpa-2'>CGPA</p>
                                </div>
                            </div> */}

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
                                    <XAxis dataKey="semester" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="olive" fill="olive" />
                                </AreaChart>
                            </div> */}
                    </div>
                </div>
                {/* <div>
                        <h3 className='pt-4 welcome-dashboard'>Upcoming</h3>
                        <div className='d-flex mt-3'>
                            <div className='me-4 d-flex align-items-center'>
                                <h3>Payment</h3>
                            </div>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <p className="title-card mt-3">29,872 TK</p>
                                        <p>Hover</p>
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="title-card mt-3">Mid-Term</p>
                                        <p>22/2/23</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Dashboard;