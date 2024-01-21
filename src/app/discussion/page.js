/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { Box, Button, Fab, Grid, Stack, Typography } from "@mui/material";
import './discus.css'
import { QuestionAnswer } from "@mui/icons-material";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useEffect, useState } from "react";

const page = () => {


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [questions, setQuestions] = useState([]);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch("/blog.json")
            .then((res) => res.json())
            .then((data) => {
                setQuestions(data);
            });
    }, []);

    console.log(questions)


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
            <Box className="borderBot"></Box>

            <Grid container className="discusContainer" spacing={2}>
                <Grid lg={3} >content</Grid>
                <Grid lg={6} className="qusContainer">
                    {
                        questions?.map(question => <div key={question?._id}>

                            <h4>How do I break a string into words and track the index of is a each word (within the original string)?</h4>
                            <p>50 Answers · 10 hours ago</p>
                            <div className="btnIcon">
                            <Button> <QuestionAnswer /> Answer</Button>
                            <Button className="like"><ThumbUpOffAltIcon /></Button>
                            </div>
                            <div className="qusDivider"></div>
                        </div>)
                    }
                </Grid>
                <Grid lg={3} >content</Grid>
            </Grid>

        </Box>
    );
};

export default page;