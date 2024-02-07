"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useUsersData from '@/app/hooks/useUsersData';
import { Typography } from '@mui/material';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import toast from 'react-hot-toast';

function createData(Name, Email, UserRole, _id, Delete) {
  return { Name, Email, UserRole, _id, Delete };
}


export default function UserTable() {

  const [users, reload] = useUsersData()
  const axiosSecure = useAxiosSecure()

  const handleDelete = (id) => {

    console.log(id);
    axiosSecure.delete(`/allUserDelete/${id}`)
      .then(res => {

        if (res.data.deletedCount > 0) {
          toast.success("User is Deleted")
        }
        reload()
      })
  }


  const rows = users.map((user) => createData(user.uName, user.uEmail, user.role, user._id))
  console.log(rows)
  // [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

  return (

    <div>
      <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, mt: 10, mb: 3, color: "black" }}>Manage Users</Typography>
      <TableContainer component={Paper} elevation={5} sx={{ p: 5 }}>
        <Table sx={{ width: 1000, p: 3 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "black" }} align="left" >No</TableCell>
              <TableCell sx={{ color: "black" }} align="left">Name</TableCell>
              <TableCell sx={{ color: "black" }} align="left">Email</TableCell>
              <TableCell sx={{ color: "black" }} align="left">User Role</TableCell>
              <TableCell sx={{ color: "black" }} align="left">Action</TableCell>

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
                <TableCell sx={{ color: "black" }} align="left">{row.UserRole}</TableCell>
                <TableCell onClick={() => handleDelete(row._id)} sx={{ color: "black" }} align="right"><button
                  class="flex justify-center items-center gap-2 w-20 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                >
                  <svg viewBox="0 0 15 15" className="w-5 fill-white">
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    Button
                  </svg>
                </button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}