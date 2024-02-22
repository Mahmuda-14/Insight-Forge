/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';
import ChatIcon from '@mui/icons-material/Chat';
import Messenger from './messenger';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MessengerButton() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box position={'fixed'} zIndex={10} left = {1400} bottom={80} sx={{backgroundColor: '#b2dfdb', borderRadius:10, width:100}}>
      <Button sx={{width:20, ml:2, py:3}}  onClick={handleOpen}><ChatIcon  fontSize="large"/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={{xs:400, md:700, lg:800}} sx={style}>
         <Messenger></Messenger>
        </Box>
      </Modal>
    </Box>
  );
}