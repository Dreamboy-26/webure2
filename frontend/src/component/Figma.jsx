import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import pattern from "../svg/Pattern.svg";
import partner from "../svg/partner.svg";
import female from "../svg/female.svg";
import logo from "../svg/logo.svg";

import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import rabbit from "../svg/rabbit.svg";
import mail from "../svg/mail.svg";
import male from "../svg/male.svg";
import event_add from "../svg/event_add.svg";
import drop from "../svg/drop.svg";
const Figma = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${pattern})`,
      width: "378.61px",
      height: "227px",
    },
  };
  return (
    <>
      <Box sx={{ background: "#feefe4" }}>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" sx={{ gap: "20px" }}>
            <Avatar src={rabbit} />
            <Typography>Datify</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: "50px", margin: "auto" }}>
            <Typography
              sx={{ fontSize: "16px", color: "#ED9B59", gap: "20px" }}
            >
              Home
            </Typography>
            <Typography sx={{ fontSize: "16px" }}>Member</Typography>
            <Typography sx={{ fontSize: "16px" }}>Blog</Typography>
            <Typography sx={{ fontSize: "16px" }}>Privacy</Typography>
            <Typography sx={{ fontSize: "16px" }}>Contact</Typography>
          </Stack>

          <Stack direction="row" sx={{ gap: "50px" }}>
            <Typography>Log In</Typography>
            <Button>Register</Button>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Box>
            <Typography variant="subheading1">
              Because you deserve better!
            </Typography>
            <Typography variant="h2">
              Get noticed for who you are, not what you look like.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              enim soluta vero quae minus, accusantium, beatae voluptates quis
              delectus libero explicabo ut magnam pariatur necessitatibus
              aliquam praesentium tenetur dolorum error?
            </Typography>

            <Stack
              direction="row"
              sx={{
                alignItems:"center",
                width: "515px",
                height: "68px",
                background: "#FFFFFF",
                borderRadius: "40px",
              }}
            >
              <Avatar src=""></Avatar>
              <TextField label="Enter your Name" variant="standard" />

              <Button>Register</Button>
            </Stack>

            <Stack direction="row" spacing="50px">
              <Box>
                <Typography variant="h3">15k+</Typography>
                <Typography variant="body1">
                  Dates and Matches made Everyday
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3">1,456</Typography>
                <Typography variant="body1">
                  New members signup every day
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3">1M+</Typography>
                <Typography variant="body1">
                  Members from around the world
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Box
              component="img"
              sx={{}}
              alt="The house from the offer."
              src={partner}
            />
            <Stack direction="row">
              <Box>
                <Grid container direction="row">
                  <Box
                    display="flex"
                    sx={{
                      width: "123px",
                      height: "44px",
                      background: "#FFFFFF",
                      boxShadow: "-20px 14px 24px rgba(0, 0, 0, 0.05)",
                      backdropFilter: "blur(15px)",

                      borderRadius: " 10px",
                    }}
                  >
                    <Avatar src={male}></Avatar>
                    <Typography variant="h5">Male</Typography>
                  </Box>

                  <Box
                    display="flex"
                    sx={{
                      width: "123px",
                      height: "44px",
                      background: "#F59B5A",
                      borderRadius: "10px",
                    }}
                  >
                    <Avatar src={event_add}></Avatar>
                    <Typography variant="h5">Male</Typography>
                  </Box>

                  <Box
                    display="flex"
                    sx={{
                      width: "123px",
                      height: "44px",
                      background: "#FFFFFF",
                      boxShadow: "-20px 14px 24px rgba(0, 0, 0, 0.05)",
                      backdropFilter: "blur(15px)",
                      borderRadius: "10px",
                    }}
                  >
                    <Avatar src={drop}></Avatar>
                    <Typography variant="h5">Male</Typography>
                  </Box>
                </Grid>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "80px" }}
                    image={female}
                    alt=""
                  />
                  <Box>
                    <Typography variant="h6">Angela Taylor</Typography>
                    <Typography> Cincnati, OH</Typography>
                  </Box>
                  <Button>Select</Button>
                </Card>
                <Card sx={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "80px" }}
                    image={female}
                    alt=""
                  />
                  <Box>
                    <Typography variant="h6">Angela Taylor</Typography>
                    <Typography> Cincnati, OH</Typography>
                  </Box>
                  <Button>Select</Button>
                </Card>
              </Box>

              <Card>
                <Paper style={styles.paperContainer}>
                  <Avatar
                    src={logo}
                    sx={{ border: "2px solid black" }}
                  ></Avatar>
                  <Typography variant="body1">CARD NUMBER</Typography>
                  <Typography variant="h5">3829 4820 4629 5025</Typography>
                  <Stack direction="row">
                    <Box>
                      <Typography variant="body1">CARDHOLDER NAME</Typography>
                      <Typography variant="h5">Pankaj Kumar</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1">VALID THRU</Typography>
                      <Typography variant="h5">09/25</Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Card>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Figma;
