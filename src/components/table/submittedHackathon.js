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
import { Typography } from '@mui/material';
import Link from 'next/link';
import useSubmittedData from '@/app/hooks/useSubmittedData';

function createData(Name, Email, Team, Category, Title, Submission, Prize) {
  return { Name, Email, Team, Category, Title, Submission, Prize };
}


export default function SubmittedHackathon() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [submittedData, setSubmittedData] = useState(true)
 
  const [allSubmittedData] = useSubmittedData()
   console.log(allSubmittedData);
  


  const rows = allSubmittedData.map((item) => createData(item.name, item.email, item.team, item.category, item.title, item.submission, item.priceMoney))
  console.log(rows)


  return (
    <div className="md:min-w-[600px] ml-16 md:ml-16 lg:ml-52 mx-auto overflow-x-auto overflow-y-auto">
      <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, mt: 10, mb: 3, color: "black" }}>All Submitted Hackathon</Typography>
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
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left">  Submission</TableCell>
              <TableCell sx={{ color: "white", fontWeight:600 }} align="left"> Prize Money</TableCell>

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
                <TableCell sx={{ color: "black" }} align="left">{row.Submission}</TableCell>
                <TableCell  sx={{ color: "black" }} align="right">
                {row.Prize}
                  </TableCell> 

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
