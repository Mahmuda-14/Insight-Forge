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

import { Backdrop, Box, Fade, Grid, InputLabel, Modal, TextField, Typography } from '@mui/material';
import useAxiosSecure from '@/app/hooks/useAxiosSecure';
import toast from 'react-hot-toast';

import useMyPaymentData from '@/app/hooks/useMyPaymentData';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function createData(Name, Email, Team, Category, Title, Description, _id) {
  return { Name, Email, Team, Category, Title, Description, _id };
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function MyHackathonTable() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [submitted, setSubmitted] = useState(true)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [myPayment] = useMyPaymentData()
  // console.log(myPayment);
  const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    formState: { errors }, reset
} = useForm();


const onSubmit = (data) => {

  const submission = data.link;
  const registerId = data.id;
  const submittedData={
    submission,registerId
  }
 console.log(submittedData)
  // axiosSecure.post('/submission', submittedData)
  //     .then(res => {
  //         console.log(res.data)

          
  //     })

}


  const rows = myPayment.map((item) => createData(item.order[0].name, item.order[0].email, item.order[0].team, item.order[0].category, item.order[0].title, item.order[0].description, item._id))
  // console.log(rows)


  return (
    <div className="md:min-w-[600px] ml-16 md:ml-16 lg:ml-52 mx-auto overflow-x-auto overflow-y-auto">
      <Typography variant="h4" color="secondary" align="center" sx={{ fontWeight: 600, mt: 10, mb: 3, color: "black" }}>My Registered Hackathon</Typography>
      <TableContainer component={Paper} elevation={5} sx={{ p: 5 }}>
        <Table sx={{ width: 1000, p: 3 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "black" }} align="left" >No</TableCell>
              <TableCell sx={{ color: "black" }} align="left">Name</TableCell>
              <TableCell sx={{ color: "black" }} align="left">Email</TableCell>
              <TableCell sx={{ color: "black" }} align="left"> Team</TableCell>
              <TableCell sx={{ color: "black" }} align="left">Category</TableCell>
              <TableCell sx={{ color: "black" }} align="left"> Title</TableCell>
              <TableCell sx={{ color: "black" }} align="left">  Description</TableCell>
              <TableCell sx={{ color: "black" }} align="left"> Submit</TableCell>

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
                <TableCell sx={{ color: "black" }} align="right">
                  <button onClick={handleOpen} className='blog-button mt-3'>Submit</button>
                 <Modal
                     aria-labelledby="transition-modal-title"
                     aria-describedby="transition-modal-description"
                     open={open}
                     onClose={handleClose}
                     closeAfterTransition
                     slots={{ backdrop: Backdrop }}
                     slotProps={{
                         backdrop: {
                             timeout: 500,
                         },
                     }}
 
                 >
                    <Fade in={open}>
                         <Box
                             component="form"
                             noValidate
                             onSubmit={handleSubmit(onSubmit)}
                             sx={style}
                         >  
                                 <TextField
                                         id="outlined-multiline-flexible"
                                         defaultValue={row._id}
                                         fullWidth
                                         {...register("id", { required: true })}
                                         sx={{ backgroundColor: "white", mt: 2 }}
                                     />

                                     <InputLabel id="demo-simple-select-helper-label">Submit your live link, github link and necessary information here</InputLabel>
                                     <TextField
                                         id="outlined-multiline-flexible"
                                         label="Submit your link here"
                                         fullWidth
                                         multiline
                                         rows={6}
                                         {...register("link", { required: true })}
                                         sx={{ backgroundColor: "white", mt: 2 }}
                                     />

                             <button
                                 className=" font-semibold w-full py-2 rounded mt-8 mb-2 bg-[#4f675b] text-white"
                             > send
                             </button>
                         </Box>
 
                     </Fade>
                 </Modal>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
