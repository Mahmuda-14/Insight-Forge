import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Social from "./Social";
import img1 from "../../../public/fb.png";
import img2 from "../../../public/twitter.png";
import img3 from "../../../public/google.png";
import img4 from "../../../public/linkedin.png";
import MainCotainer from "../shared/Container/MainCotainer";
const All = () => {
  return (
    <MainCotainer>
      <Box mt={5}>
        <Grid container spacing={2}>
          <Grid item lg={3} md={6} xs={12}>
            <Social src={img1} alt="Facebook" title="Facebook" />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Social src={img2} alt="Twitter" title="Twitter" />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Social src={img3} alt="Google" title="Google" />
          </Grid>
          <Grid item lg={3} md={6} xs={12}>
            <Social src={img4} alt="LinkedIn" title="LinkedIn" />
          </Grid>
        </Grid>
      </Box>
    </MainCotainer>
  );
};

export default All;
