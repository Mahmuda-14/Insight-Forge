/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import useDiscussData from '@/app/hooks/useDiscussData';
import useHackathonData from '@/app/hooks/useHackathonData';
// import useMyBlog from '@/app/hooks/useMyBlog';
import usePaymentData from '@/app/hooks/usePaymentData';
// import { useEffect, usee } from 'react';
// import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, PieChart, Pie } from 'recharts';
import dynamic from "next/dynamic";
import { FaBook, FaDollarSign, FaUsers } from 'react-icons/fa';
import useUsersData from '@/app/hooks/useUsersData';
import './analystic.css';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Page = () => {
    const [allhackathon] = useHackathonData()
    const [payment] = usePaymentData()
    const [discuss] = useDiscussData()
    const [users] = useUsersData()

    // const price = allhackathon.totalPrice.length
    let sum = 0;
    if (allhackathon && allhackathon.length > 0) {
        sum = allhackathon.reduce((total, hackathon) => total + hackathon.totalPrice, 0);
    }

    let sum2 = 0;
    if (users && users.length > 0) {
        sum2 = allhackathon.reduce((total, hackathon) => total + hackathon.role, 0);
    }


    const data = [
        {
            name: 'Posts',
            uv: discuss.length,
        },
        {
            name: 'Hackathon',
            uv: allhackathon.length,
        },
        {
            name: 'Payments',
            uv: payment.length,
        },
    ];

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        const getPath = (x, y, width, height) => {
            return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
                ${x + width / 2}, ${y}
                C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
                Z`;
        };

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = data.map((item) => ({ name: item.name, value: item.uv }));

    return (
        <div className=' mt-[6.5rem] ml-20'>
            {/* <h2 className="text-3xl">
                <span>Hi, Welcome </span>
            </h2> */}

            <div className="flex flex-row gap-3 ml-[16rem]">

                <div className=" small-desc go-corner go-arrow card p-4 ">
                <div className="card-title">Revenue</div>
                    <div className="flex flex-row text-secondary">
                        <FaDollarSign className='text-3xl'></FaDollarSign>
                        <div className="">{sum} USD</div>
                    </div>
                   
                
                   
                </div>

                <div className="go-corner go-arrow card p-4">
                <div className="card-title">Users</div>
                    <div className=" flex flex-row text-secondary">
                        <FaUsers className='text-3xl'></FaUsers>
                        <div className="">{users.length}</div>
                    </div>
                   
                   
                   
                </div>


                {/* <div className="">
                    <div className=" text-secondary">
                        <FaBook className='text-3xl'></FaBook>
                    </div>
                    <div className="">Menu Items</div>
                    <div className=""></div>
                    <div className="">↗︎ 400 (22%)</div>
                </div>

                <div className="">
                    <div className=" text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="">Orders</div>
                    <div className="">{}</div>
                    <div className="">↘︎ 90 (14%)</div>
                </div> */}

            </div>

            {/* width: 650px;
  height: 550px */}

            <div className="flex ml-11" style={{ width: '100%', height: '76%', marginTop: '53px' }}>
                <div className="w-1/2">
                    <BarChart
                        width={728}
                        height={413}
                        data={data}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar
                            dataKey="uv"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: 'top' }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2 -mt-[93px] ">
                    <PieChart width={650} height={550}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend className=''/>
                      
                    </PieChart>
                </div>

            </div>
        </div>
    );
};


export default dynamic(() => Promise.resolve(Page), { ssr: false })

