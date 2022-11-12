import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, Paper, Typography } from "@mui/material";

const BoxItem = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flex: 1,
}));

const BoxItem2 = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1),
  textAlign: "center",

  justifyContent: "space-between",
  flex: 1,
}));

const BoxItem3 = styled(Paper)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(1),
  textAlign: "center",
  gap: "10px",
  flex: 1,
}));

const Figma = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={2}
        sx={{ background: "yellow" }}
      >
        <BoxItem></BoxItem>
        <BoxItem2>
          <Typography sx={{ fontSize: "16px", color: "#ED9B59" }}>
            Home
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>Member</Typography>
          <Typography sx={{ fontSize: "16px" }}>Blog</Typography>
          <Typography sx={{ fontSize: "16px" }}>Privacy</Typography>
          <Typography sx={{ fontSize: "16px" }}>Contact</Typography>
        </BoxItem2>

        <BoxItem3>
          <Typography
            sx={{
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "20px",
                textAlign: "center",
                color:" #7D8790"
            }}
          >
            Log In
          </Typography>
          <Button
            variant="contained"
            sx={{
              height: "52px",
              borderRadius: "40px",
              backgroundColor: "#ED9B59",
              width: "146px",
              top: "37px",
            }}
          >
            Register
          </Button>
        </BoxItem3>
      </Stack>
    </>
  );
};

export default Figma;
