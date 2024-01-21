import { Box, Button, Stack, Typography } from "@mui/material";

const page = () => {
    return (
        <Box className="discussion">
            <Stack className="discusHeader"
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
            >
                <Typography className="topQus" variant="h4">Top Questions</Typography>
                {/* <Button variant="outlined">AskQuestion</Button> */}
                <button className="askBtn" variant="outlined">Ask Question</button>
            </Stack>
        </Box>
    );
};

export default page;