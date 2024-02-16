
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShareIcon from '@mui/icons-material/Share';
import { FacebookShareButton,LinkedinShareButton, WhatsappShareButton , WhatsappIcon , TwitterShareButton,TelegramShareButton,TelegramIcon, FacebookIcon,LinkedinIcon, TwitterIcon,} from "react-share";
 
const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:"30%",
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
    };

const BlogShare = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //const  currentPageUrl= window.location.href;
  const  currentPageUrl= "https://insight-forge-psi.vercel.app/blogs";
  const hashText='#Insightforge';
  const quoteText= 'Please share this post';
  const blogTitle= "This is a blog"
  
 
      return (
            <div>
            <Button onClick={handleOpen} className='text-black' >
                  <ShareIcon></ShareIcon>
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="w-full md:w-1/3 rounded-xl " >
            <Typography className='text-center text-2xl font-bold'>
                  Thanks for share
            </Typography>
            <Typography className='text-center text-lg  uppercase'>
                  Insight Forge
            </Typography>
            <Box className=" flex-col md:flex-row my-6 items-center m-auto space-x-4 ">
            <FacebookShareButton 
            url= {currentPageUrl}
            quote={quoteText}
            hashtag={hashText}
            title={ blogTitle} 
            >
            <FacebookIcon className=' w-12 h-12 rounded-full' ></FacebookIcon>
            </FacebookShareButton>

            <LinkedinShareButton
            url= {currentPageUrl}
            quote={quoteText}
            hashtag={hashText}
            >
            <LinkedinIcon className='w-12 h-12  rounded-full'></LinkedinIcon>
            </LinkedinShareButton>

            <TwitterShareButton
            url= {currentPageUrl}
            quote={quoteText}
            hashtag={hashText}
            >
            <TwitterIcon className='w-12 h-12  rounded-full'></TwitterIcon>
            </TwitterShareButton>

            <TelegramShareButton
            url= {currentPageUrl}
            quote={quoteText}
            hashtag={hashText}
            >
            <TelegramIcon className='w-12 h-12  rounded-full'></TelegramIcon>
            </TelegramShareButton>

            <WhatsappShareButton
            url= {currentPageUrl}
            quote={quoteText}
            hashtag={hashText}
            >
            <WhatsappIcon className='w-12 h-12  rounded-full'></WhatsappIcon>
            </WhatsappShareButton>
            </Box>
            </Box>
            </Modal>
          </div>
        
      );
};

export default BlogShare;


