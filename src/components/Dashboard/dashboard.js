import React from 'react';
import { CartesianGrid, Tooltip, Legend, Line, LineChart, XAxis, YAxis, AreaChart, Area, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import './Dashboard.css';
import study from '../../resources/others/study.png'
import teacherImg1 from '../../resources/teachersImages/img1.png'
import teacherImg2 from '../../resources/teachersImages/img2.png'
import teacherImg3 from '../../resources/teachersImages/img3.png'
import teacherImg4 from '../../resources/teachersImages/img4.png'
import teacherImg5 from '../../resources/teachersImages/img5.png'
import teacherImg6 from '../../resources/teachersImages/img6.png'
import { NavLink } from 'react-router-dom';


const Dashboard = () => {


    // const data = [
    //     {
    //         "semester": "Fall 2019",
    //         "investment": 100000,
    //         "SGPA": 3.33,
    //         "revenue": 10401
    //     },
    //     {
    //         "semester": "Spring 2020",
    //         "investment": 200000,
    //         "SGPA": 3.86,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Summer 2020",
    //         "investment": 200000,
    //         "SGPA": 3.86,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Fall 2020",
    //         "investment": 200000,
    //         "SGPA": 3.79,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Spring 2021",
    //         "investment": 200000,
    //         "SGPA": 3.79,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Summer 2021",
    //         "investment": 200000,
    //         "SGPA": 3.81,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Fall 2021",
    //         "investment": 200000,
    //         "SGPA": 3.95,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Spring 2022",
    //         "investment": 200000,
    //         "SGPA": 3.60,
    //         "revenue": 24500
    //     },
    //     {
    //         "semester": "Fall 2022",
    //         "investment": 200000,
    //         "SGPA": 3.12,
    //         "revenue": 24500
    //     },
    // ]


    const data = [
        {
            "semester": "Fall 19",
            "investment": 100000,
            "SGPA": 2.33,
            "revenue": 10401
        },
        {
            "semester": "Spring 20",
            "investment": 200000,
            "SGPA": 2.86,
            "revenue": 24500
        },
        {
            "semester": "Summer 20",
            "investment": 200000,
            "SGPA": 2.56,
            "revenue": 24500
        },
        {
            "semester": "Fall 20",
            "investment": 200000,
            "SGPA": 3.20,
            "revenue": 24500
        },
        {
            "semester": "Spring 21",
            "investment": 200000,
            "SGPA": 3.00,
            "revenue": 24500
        },
        {
            "semester": "Summer 21",
            "investment": 200000,
            "SGPA": 3.81,
            "revenue": 24500
        },
        {
            "semester": "Fall 21",
            "investment": 200000,
            "SGPA": 2.22,
            "revenue": 24500
        },
        {
            "semester": "Spring 22",
            "investment": 200000,
            "SGPA": 2.90,
            "revenue": 24500
        },
        {
            "semester": "Fall 22",
            "investment": 200000,
            "SGPA": 3.12,
            "revenue": 24500
        }
    ]


    const data2 = [
        {
            "subject": "SP VI",
            "progress": 50,
            "fullProgress": 100
        },
        {
            "subject": "AI",
            "progress": 30,
            "fullProgress": 100
        },
        {
            "subject": "PR",
            "progress": 50,
            "fullProgress": 100
        },
        {
            "subject": "WE",
            "progress": 100,
            "fullProgress": 100
        },
        {
            "subject": "WE Lab",
            "progress": 100,
            "fullProgress": 100
        },
        {
            "subject": "DIP",
            "progress": 66,
            "fullProgress": 100
        },
        {
            "subject": "IS",
            "progress": 75,
            "fullProgress": 100
        },
        {
            "subject": "SE",
            "progress": 63,
            "fullProgress": 100
        },
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
                                    <p><span>Hi Nayeem.</span> You have completed <span>76%</span> of your weekly target. Keep learning with us like this.</p>
                                    <NavLink to='/profile'><button>View Profile</button></NavLink>
                                </div>
                                <div className='study-radar-chart'>
                                    {/* <img className='study-radar-chart' src={study} alt="" /> */}
                                    <ResponsiveContainer>
                                        <RadarChart data={data2}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" />
                                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                            <Radar name="Mike" dataKey="progress" stroke="#1d40fb" fill="#1d40fb" fillOpacity={0.6} />
                                            {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
                                            <Legend />
                                        </RadarChart>
                                    </ResponsiveContainer>
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
                                            <div><h5>12 June '23<br /><span>09:00-10:30</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg2} alt="" />
                                                <h5>Tajmery Mahfuz <br /><span>Software Project VI</span></h5>
                                            </div>
                                            <div><h5>13 June '23<br /><span>11:00-12:30</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg3} alt="" />
                                                <h5>Touhid Bhuiyan <br /><span>Information Security</span></h5>
                                            </div>
                                            <div><h5>15 June '23<br /><span>09:30-11:00</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg4} alt="" />
                                                <h5>Sharmin Akter Rima <br /><span>Web Engineering</span></h5>
                                            </div>
                                            <div><h5>16 June '23<br /><span>13:30-15:00</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg5} alt="" />
                                                <h5>Dr. Bimal Das <br /><span>Principles of Robotics</span></h5>
                                            </div>
                                            <div><h5>18 June '23<br /><span>11:00-12:30</span></h5></div>
                                        </div>
                                        <div className='d-flex justify-content-between class-info class-info-hidden'>
                                            <div className='d-flex assignment-name'>
                                                <img src={teacherImg6} alt="" />
                                                <h5>Narayan Chakraborty <br /><span>Digital Image Processing</span></h5>
                                            </div>
                                            <div><h5>22 June '23<br /><span>13:00-14:30</span></h5></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 2nd section end  */}



                        {/* 3rd section start  */}
                        <div className='dashboard-third-section d-flex'>
                            <div>
                                <div className='dashboard-line-chart' id='show-line-chart-1'>
                                    <h4>SGPA</h4>
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
                                            <Line type="monotone" dataKey="SGPA" stroke="#1d40fb" activeDot={{ r: 8 }} />

                                        </LineChart>

                                    </ResponsiveContainer>
                                    {/* <p className='fig-cgpa'>SGPA</p> */}
                                </div>
                                <div className='dashboard-line-chart' id='show-line-chart-2'>
                                    <h4>SGPA</h4>
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
                                            <XAxis dataKey="semester" ticks={[1.2, 2.8, 4.4, 6]} />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Line type="monotone" dataKey="SGPA" stroke="#1d40fb" activeDot={{ r: 8 }} />

                                        </LineChart>

                                    </ResponsiveContainer>
                                    {/* <p className='fig-cgpa'>SGPA</p> */}
                                </div>
                            </div>

                            <div className='dashboard-third-second-section'>
                                <h4>Notice Board</h4>
                                <div className='notices'>
                                    <div className='d-flex justify-content-between notice-info'>
                                        <div>
                                            <h5 id='first-notice'><i class="fa-solid fa-flag"></i>Spring 2023 Class Routine<br /><span><i class="fa-solid fa-hand-point-right"></i>CSE</span></h5>
                                        </div>
                                        <div><h5>22 June '23<br /><span>Routine V1.0</span></h5></div>
                                    </div>
                                    <div className='d-flex justify-content-between notice-info'>
                                        <div>
                                            <h5 id='second-notice'><i class="fa-solid fa-flag"></i>Make-up Exam Routine<br /><span><i class="fa-solid fa-hand-point-right"></i>EEE</span></h5>
                                        </div>
                                        <div><h5>18 June '23<br /><span>Examination</span></h5></div>
                                    </div>
                                    <div className='d-flex justify-content-between notice-info'>
                                        <div>
                                            <h5 id='third-notice'><i class="fa-solid fa-flag"></i>Late Registration Notice<br /><span><i class="fa-solid fa-hand-point-right"></i>Registration Office</span></h5>
                                        </div>
                                        <div><h5>18 June '23<br /><span>Academic</span></h5></div>
                                    </div>
                                    <div className='d-flex justify-content-between notice-info'>
                                        <div>
                                            <h5 id='fourth-notice'><i class="fa-solid fa-flag"></i>Overlap Exam Fall 2022<br /><span><i class="fa-solid fa-hand-point-right"></i>SE</span></h5>
                                        </div>
                                        <div><h5>17 June '23<br /><span>Examination</span></h5></div>
                                    </div>
                                    <div className='d-flex justify-content-between notice-info'>
                                        <div>
                                            <h5 id='fifth-notice'><i class="fa-solid fa-flag"></i>Spring 2023 Class Routine<br /><span><i class="fa-solid fa-hand-point-right"></i>EEE</span></h5>
                                        </div>
                                        <div><h5>16 June '23<br /><span>Routine V1.0</span></h5></div>
                                    </div>
                                    <div className='d-flex justify-content-between notice-info'>
                                        <div>
                                            <h5 id='sixth-notice'><i class="fa-solid fa-flag"></i>Title Defense Board 193<br /><span><i class="fa-solid fa-hand-point-right"></i>CSE</span></h5>
                                        </div>
                                        <div><h5>11 June '23<br /><span>Academic</span></h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 3rd section end  */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;