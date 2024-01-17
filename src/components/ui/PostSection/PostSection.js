"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import PostCard from "./PostCard/PostCard";
import { Container, Stack } from "@mui/material";

const PostSection = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const profileStyle = {
    padding: "20px",
    textAlign: "center",
  };

  return (
    <Container style={profileStyle}>
      <Box>
        <Box
          marginBottom={5}
          sx={{
            width: "100%",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            centered
          >
            <Tab
              sx={{ flexDirection: "row", gap: "5px" }}
              icon={<TurnedInNotOutlinedIcon />}
              value="1"
              label={
                <Typography sx={{ fontSize: { xs: 10, md: 16 } }}>
                  Recent Qustions
                </Typography>
              }
            >
              <TurnedInNotOutlinedIcon />
            </Tab>
            <Tab
              sx={{ flexDirection: "row", gap: "5px" }}
              icon={<WebStoriesIcon />}
              value="2"
              label={
                <Typography sx={{ fontSize: { xs: 10, md: 16 } }}>
                  Popular Questions
                </Typography>
              }
            />
          </Tabs>
        </Box>
        <Stack spacing={2}>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Stack>
      
      </Box>
    </Container>
  );
};
export default PostSection;
