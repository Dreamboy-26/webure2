import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import pattern from "../svg/Pattern.svg";
import partner from "../svg/partner.svg";
import female from "../svg/female.svg";
import logo from "../svg/logo.svg";
import vector from "../svg/Vector.svg";
import group1 from "../svg/Group1.svg";
import group2 from "../svg/Group2.svg";
import { ReactComponent as Ring } from "../svg/Ring.svg";
import { ReactComponent as Glass } from "../svg/Glass.svg";
import { ReactComponent as Heart } from "../svg/Heart.svg";
import { ReactComponent as Thumb } from "../svg/Thumb.svg";
import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardContent,
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
      width: "350.61px",
      height: "200px",
      marginTop: "20px",
      borderRadius: "20px",
      padding: "20px",
    
     
    },
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#feefe4",
          margin: "auto",
          width: { md: "1440px" },
        }}
      >
        <Box
          component="img"
          sx={{
            height: 442,
            width: {xs:"200px", sm:"600px", md: "1000px" },
            position: "absolute",
            marginLeft: {xs:"0", sm:"100px", md:"500px"},
            opacity:"0.5"
          }}
          alt="The house from the offer."
          src={group1}
        />
        <Box
          component="img"
          sx={{
            height: 402,
            width: {xs:"200px", sm:"600px", md:"900px"},
            position: "absolute",
            marginTop: "520px",
            opacity:"0.5"

          }}
          alt="The house from the offer."
          src={group2}
          
        />

        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", padding: { md: "20px" } }}
        >
          <Stack direction="row" sx={{ gap: "20px" }}>
            <Avatar
              src={rabbit}
              sx={{ width: "25px", height: "25px", marginTop: "10px" }}
            />
            <Typography sx={{ marginTop: "10px" }}>Datify</Typography>
          </Stack>
          <Stack direction="row" sx={{ gap: {sm:"20px" ,md:"50px"},display:{xs:"none",sm:"inline-flex"}, margin: "auto" }}>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#ED9B59",
                gap: { md:"20px"},
                fontWeight: "700",
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                color: "#7D8790",
              }}
            >
              Member
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                color: "#7D8790",
              }}
            >
              Blog
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                color: "#7D8790",
              }}
            >
              Privacy
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                color: "#7D8790",
              }}
            >
              Contact
            </Typography>
          </Stack>

          <Stack direction="row" sx={{ gap: "50px", marginTop: "10px" }}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                color: "#7D8790",
              }}
            >
              Log In
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "#ED9B59",
                boxShadow:
                  "0px 100px 161px rgba(245, 155, 90, 0.08), 0px 64.8148px 94.2894px rgba(245, 155, 90, 0.0607407), 0px 38.5185px 51.2815px rgba(245, 155, 90, 0.0485926), 0px 20px 26.1625px rgba(245, 155, 90, 0.04), 0px 8.14815px 13.1185px rgba(245, 155, 90, 0.0314074), 0px 1.85185px 6.33565px rgba(245, 155, 90, 0.0192593)",
                borderRadius: "40px",
              }}
            >
              Register
            </Button>
          </Stack>
        </Stack>

        <Stack direction={{ sm: "column", md: "row" }}>
          <Box
            sx={{
              width: { md: "45%" },
              paddingLeft: { md: "20px" },
              marginTop: "100px",
            }}
          >
            <Typography variant="subheading1" sx={{ color: "#ED9B59" }}>
              Because you deserve better!
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontWeight: "600", marginBottom: "30px" }}
            >
              Get noticed for <span className="colorChange">who</span> you are,{" "}
              <span className="colorChange">not what</span> you look like.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "30px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              enim soluta vero quae minus, accusantium, beatae voluptates quis
              delectus libero explicabo ut magnam pariatur necessitatibus
              aliquam praesentium tenetur dolorum error?
            </Typography>

            <Stack
              direction="row"
              sx={{
                alignItems: "center",
                width:"515px",
                height: "60px",
                background: "#FFFFFF",
                borderRadius: "40px",
                marginBottom: "130px",
              }}
            >
              <Avatar
                src={mail}
                sx={{ width: "25px", padding: "20px", paddingTop: "35px" }}
              ></Avatar>
              <Box sx={{ width: "310px"  }}>
                <Typography>Enter Your Name</Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  background: "#ED9B59",
                  boxShadow:
                    "0px 100px 161px rgba(245, 155, 90, 0.08), 0px 64.8148px 94.2894px rgba(245, 155, 90, 0.0607407), 0px 38.5185px 51.2815px rgba(245, 155, 90, 0.0485926), 0px 20px 26.1625px rgba(245, 155, 90, 0.04), 0px 8.14815px 13.1185px rgba(245, 155, 90, 0.0314074), 0px 1.85185px 6.33565px rgba(245, 155, 90, 0.0192593)",
                  borderRadius: "40px",
                }}
              >
                Get Started
              </Button>
            </Stack>

            <Stack direction="row" spacing="50px">
              <Box>
                <Typography variant="h3" sx={{ fontWeight: "600" }}>
                  15k+
                </Typography>
                <Typography variant="body2" sx={{ width: "130px" }}>
                  Dates and Matches made Everyday
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "600", color: "#ED9B59" }}
                >
                  1,456
                </Typography>
                <Typography variant="body2" sx={{ width: "120px" }}>
                  New members signup every day
                </Typography>
              </Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: "600" }}>
                  1M+
                </Typography>
                <Typography variant="body2" sx={{ width: "120px" }}>
                  Members from around the world
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box>
          
            <Box>
            <Thumb className="thumb" />
            <Ring className="ring" />
            <Glass className="glass" />
            <Heart className="heart" />
              <Box
                component="img"
                alt="The house from the offer."
                src={partner}
                sx={{
                  width: {
                    xs:"490px",
                    sm: "550px",
                    md: "651px",
                  },
                  position: "absolute",
                }}
              />
            </Box>
            <CardMedia
              component="img"
              sx={{
                width: { md: "920px" },

                marginTop: "250px",
                marginLeft: "-12px",
              }}
              image={vector}
              alt=""
            />
          </Box>
          <Stack
            direction="row"
            position="absolute"
            sx={{
              marginLeft: { sm: "0px", md: "650px" },
              marginTop: {xs:"1100px", sm: "1150px", md: "560px" },
              width: { md: "800px" },
            }}
          >
            <Box sx={{ width: { md: "400px" } }}>
              <Grid
                container
                direction="row"
                sx={{ gap: "10px", width: { sm: "250px", md: "500px" } }}
              >
                <Box
                  display="flex"
                  sx={{
                    width: { md: "123px" },
                    height: "44px",
                    background: "#FFFFFF",
                    boxShadow: "-20px 14px 24px rgba(0, 0, 0, 0.05)",
                    backdropFilter: "blur(15px)",
                    paddingRight: "10px",
                    borderRadius: " 10px",
                  }}
                >
                  <Avatar
                    src={male}
                    sx={{ width: "25px", height: "25px", padding: "10px" }}
                  ></Avatar>
                  <Typography
                    variant="h5"
                    sx={{ paddingTop: "10px", fontSize: "18px" }}
                  >
                    Male
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  sx={{
                    width: { md: "123px" },
                    height: "44px",
                    background: "#F59B5A",
                    borderRadius: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <Avatar
                    src={event_add}
                    sx={{ width: "25px", height: "25px", padding: "8px" }}
                  ></Avatar>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      paddingTop: "10px",
                      fontSize: "18px",
                      paddingRight: "10px",
                    }}
                  >
                    13.11.22
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  sx={{
                    width: { md: "123px" },
                    height: "44px",
                    background: "#FFFFFF",
                    boxShadow: "-20px 14px 24px rgba(0, 0, 0, 0.05)",
                    backdropFilter: "blur(15px)",
                    borderRadius: "10px",
                    paddingRight: "10px",
                  }}
                >
                  <Avatar
                    src={drop}
                    sx={{ width: "25px", height: "25px", padding: "10px" }}
                  ></Avatar>
                  <Typography
                    variant="h5"
                    sx={{ paddingTop: "10px", fontSize: "18px" }}
                  >
                    Drop
                  </Typography>
                </Box>
              </Grid>
              <Card
                sx={{
                  display: {xs:"none",md:"flex"},
                  width: { md: "365px" },
                  height: { sm: "78px", md: "98px" },
                  marginTop: "30px",
                  justifyContent: "space-between",
                  
                }}
              >
                <Box display="flex" sx={{ padding: "10px" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "77px", marginRight: "20px" }}
                    image={female}
                    alt=""
                  />
                  <Box sx={{ paddingTop: "10px" }}>
                    <Typography variant="h6">Angela Taylor</Typography>
                    <Typography> Cincnati, OH</Typography>
                  </Box>
                </Box>

                <Button
                  sx={{
                    width: { md: "76px" },
                    height: "44px",
                    background: "#F59B5A",
                    bordeRrRadius: "10px",
                    color: "white",
                    marginTop: "30px",
                    marginRight: "10px",
                  }}
                >
                  Select
                </Button>
              </Card>
              <Card
                sx={{
                  display: {xs:"none",md:"flex"},
                  width: "365px",
                  height: "98px",
                  marginTop: "30px",
                  justifyContent: "space-between",
                  marginLeft: "20px",
                }}
              >
                <Box display="flex" sx={{ padding: "10px" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "77px", height: "77px", marginRight: "20px" }}
                    image={female}
                    alt=""
                  />
                  <Box sx={{ paddingTop: "10px" }}>
                    <Typography variant="h6">Angela Taylor</Typography>
                    <Typography> Cincnati, OH</Typography>
                  </Box>
                </Box>
                <Button
                  sx={{
                    width: "76px",
                    height: "44px",
                    background: "#F59B5A",
                    bordeRrRadius: "10px",
                    color: "white",
                    marginTop: "30px",
                    marginRight: "10px",
                  }}
                >
                  Select
                </Button>
              </Card>
            </Box>

            <Box>
              <Paper style={styles.paperContainer}>
                <Avatar
                  src={logo}
                  sx={{  marginBottom: "30px" }}
                ></Avatar>
        
                <Typography variant="body1">CARD NUMBER</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginBottom: "30px",
                    fontWeight: "600",
                    fontSize: "25px",
                  }}
                >
                  3829 4820 4629 5025
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginRight: "20px",
                  }}
                >
                  <Box>
                    <Typography variant="body2">CARDHOLDER NAME</Typography>
                    <Typography variant="h6">Pankaj Kumar</Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2">VALID THRU</Typography>
                    <Typography variant="h6">09/25</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Figma;
