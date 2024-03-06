"use client"

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination, Typography } from '@mui/material';
import DashboardTitle from '@/components/shared/dashboardTitle/dashboardTitle';
import useMyDiscuss from '@/app/hooks/useMyDiscuss';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Link from 'next/link';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const MyQuestion = () => {
    const [myDiscuss, reloadMyDiscuss] = useMyDiscuss()
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const axiosSecure = useAxiosSecure()

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allDiscussDelete/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This food has been deleted.",
                                icon: "success"
                            });
                            reloadMyDiscuss()
                        }
                    }).catch(error => {
                        console.error("Error:", error);
                        toast.error("Something was wrong");
                    });
            }
        });
    }

    return (
        <div className='mt-20 min-h-screen'>
            <DashboardTitle subTitle='Your Posted Question' headerTitle='See your all question'></DashboardTitle>
            <div className='md:pr-3 md:pl-5 lg:pr-0 lg:pl-0 pr-2'>

                <div className='xl:w-[1024px] lg:w-[700px] mx-auto'>
                    <Paper sx={{ width: '100%' }}>
                        <TableContainer sx={{ maxHeight: 700 }}>
                            <Table
                                // stickyHeader aria-label="sticky table"
                                sx={{ width: '100%' }}
                                aria-label="simple table"
                            >
                                <TableHead sx={{backgroundColor:"#4f675b", px:4}}>
                                    <TableRow>
                                        <TableCell sx={{ color: "white", fontWeight:600 }} align="left" >No</TableCell>
                                        <TableCell sx={{ color: "white", fontWeight:600 }} align="left">Name</TableCell>
                                        <TableCell sx={{ color: "white", fontWeight:600 }} align="left">Title</TableCell>
                                        <TableCell sx={{ color: "white", fontWeight:600 }} align="left">Details</TableCell>
                                        <TableCell sx={{ color: "white", fontWeight:600 }} align="left">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {myDiscuss
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, i) =>
                                        (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                                <TableCell sx={{ color: "black" }} component="th" scope="row">
                                                    {i + 1}
                                                </TableCell>

                                                <TableCell sx={{ color: "black" }} component="th" scope="row">
                                                    {row.name}
                                                </TableCell>

                                                <TableCell sx={{ color: "black" }} align="left">{row?.title}</TableCell>

                                                <TableCell sx={{ color: "black" }} align="left">
                                                    <Link href={`/discussion/${row._id}`}>
                                                        <button  className=" font-semibold px-5 py-4 rounded  bg-[#4f675b] text-white">Details</button>
                                                    </Link>
                                                </TableCell>

                                                <TableCell onClick={() => handleDelete(row._id)} sx={{ color: "black" }} align="right">
                                                <button
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
                </button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                        )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={myDiscuss.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </div>

            </div>
        </div>
    );
};

export default MyQuestion;