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
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: "black" }} align="left" >No</TableCell>
                                        <TableCell sx={{ color: "black" }} align="left">Name</TableCell>
                                        <TableCell sx={{ color: "black" }} align="left">Title</TableCell>
                                        <TableCell sx={{ color: "black" }} align="left">Details</TableCell>
                                        <TableCell sx={{ color: "black" }} align="left">Delete</TableCell>
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
                                                        <button className='rounded-sm py-1 px-2 bg-gray-100 hover:bg-gray-200'>Details</button>
                                                    </Link>
                                                </TableCell>

                                                <TableCell onClick={() => handleDelete(row._id)} sx={{ color: "black" }} align="right">
                                                    <button className='flex justify-center items-center text-red-500 hover:bg-red-200 p-2 rounded-sm'>
                                                        <DeleteForeverIcon color='red' />
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