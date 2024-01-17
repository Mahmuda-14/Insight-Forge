
import { FaQuoteLeft } from "react-icons/fa";
import React from 'react';
import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Rating, Stack, Typography, styled } from '@mui/material';
import { red } from '@mui/material/colors';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const MyCard = () => {

    const StyledFaQuoteLeft = styled(FaQuoteLeft)({
        color: 'white'
    });

    return (
        <div>

            <Card sx={{ maxWidth: 345, padding: '30px', bgcolor: 'transparent' }}>
                <CardContent>

                    <StyledFaQuoteLeft />


                    <Typography variant="body2" color="text.secondary" sx={{ color: 'white', fontSize: "lg", fontWeight: "lg" }}>
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardHeader sx={{ color: 'white' }}
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            R
                        </Avatar>
                    }

                    title="Shrimp and Chorizo Paella"
                    subheader={<Rating name="size-small" sx={{ color: 'white', }} defaultValue={5} size="small" />}

                />
            </Card>
        </div>












    );
};

export default MyCard;





