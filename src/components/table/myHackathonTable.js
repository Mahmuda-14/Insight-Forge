/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */


"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../utils/button/theme_button.css'
import {  Typography } from '@mui/material';
import useMyPaymentData from '@/app/hooks/useMyPaymentData';
import { useState } from 'react';
import Link from 'next/link';
import useSubmittedData from '@/app/hooks/useSubmittedData';
import DashboardTitle from '../shared/dashboardTitle/dashboardTitle';

function createData(Name, Email, Team, Category, Title, Description, _id) {
  return { Name, Email, Team, Category, Title, Description, _id };
}


export default function MyHackathonTable() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
 
  // const [submitted, setSubmitted] = useState(true)
  // // eslint-disable-next-line react-hooks/rules-of-hooks

  
  // const [allSubmittedData] = useSubmittedData()

  const [myPayment] = useMyPaymentData()
   console.log(myPayment);



  const rows = myPayment.map((item) => createData(item.order[0].name, item.order[0].email, item.order[0].team, item.order[0].category, item.order[0].title, item.order[0].description, item._id))
  console.log(rows)


  return (
    <div className="md:min-w-[600px] ml-16 md:ml-16 lg:ml-52 mx-auto overflow-x-auto overflow-y-auto mt-10">
       <DashboardTitle  subTitle='My Hackathons are here' headerTitle='My Hackathon'></DashboardTitle>
      <TableContainer component={Paper} elevation={5} sx={{ p: 5 }}>
        <Table sx={{ width: 1000, p: 3 }} aria-label="simple table">
          <TableHead sx={{backgroundColor:"#4f675b", px:4}}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left" >No</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left">Name</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left">Email</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left"> Team</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left">Category</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left"> Title</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left">  Description</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left"> Submit</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, color: "black" }}
              >
                <TableCell sx={{ color: "black" }} component="th" scope="row">
                  {i + 1}
                </TableCell>
                <TableCell sx={{ color: "black" }} component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell sx={{ color: "black" }} align="left">{row.Email}</TableCell>
                <TableCell sx={{ color: "black" }} align="left">{row.Team}</TableCell>
                <TableCell sx={{ color: "black" }} align="left">{row.Category}</TableCell>
                <TableCell sx={{ color: "black" }} align="left">{row.Title}</TableCell>
                <TableCell sx={{ color: "black" }} align="left">{row.Description}</TableCell>
                {/* {
                  submitted 
                  ?  */}
                <TableCell   sx={{ color: "black" }} align="right">
                 
                  <Link href={`/dashboard/myHackathon/${row._id}`}><button  className='blog-button mt-3'>Submit</button></Link> 
                   </TableCell>
{/* 
                 :  <TableCell sx={{ color: "black" }} align="right">
                  <button className=" font-semibold px-2 py-2 rounded mt-8 mb-2 bg-[#4f675b] text-white">Submitted</button>
                  </TableCell>           
                  
                  }   */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
