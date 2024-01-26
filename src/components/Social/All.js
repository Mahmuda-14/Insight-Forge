import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Social from "./Social";
import img1 from "../../../public/fb.png";
import img2 from "../../../public/twitter.png";
import img3 from "../../../public/google.png";
import img4 from "../../../public/linkedin.png";
import { motion } from "framer-motion"

const All = () => {
  return (
    <Box mt={5} sx={{ flexGrow: 1, p:3 }}>
     
      <Grid container spacing={2}>
        <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear"
        }}
        >

        </motion.div>
        <Grid item md={3} sm={6} >
          <Social src={img1} alt="Facebook" title="Facebook" />
        </Grid>
        <Grid item md={3} sm={6}>
          <Social src={img2} alt="Twitter" title="Twitter" />
        </Grid>
        <Grid item md={3} sm={6}>
          <Social src={img3} alt="Google" title="Google" />
        </Grid>
        <Grid item md={3} sm={6}>
          <Social src={img4} alt="LinkedIn" title="LinkedIn" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default All;
