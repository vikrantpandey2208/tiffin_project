import React from "react";
import { Typography, Grid, Paper } from "@mui/material";
import { NavbarForFooter } from "./NavbarForFooter";
import vk from "./vk.jpg";
import kk from "./kk.jpg";
import { Container } from "@mui/system";
import "./About.css";
import { Footer } from "../LandingPage/Footer";

export const About = () => {
  return (
    <>
      <NavbarForFooter />
      <Container>
        <Typography variant="h5" mt={3} sx={{ fontWeight: "bold" }}>
          About JustDabba
        </Typography>
        {/* Developer details */}
        <Paper elevation={4} style={{ width: "auto" }}>
          <Grid
            container
            ml={4}
            mt={3}
            sm={12}
            pt={4}
            pb={4}
            alignItems="center"
            alignContent={"center"}
            alignSelf={"center"}
            justifyContent="center"
          >
            <Grid item xs={5}>
              <div>
                <img src={kk} className="pic" />
              </div>
              <div>
                <Typography variant="body1">
                  Name: <b>Karan Khatik</b>
                </Typography>
                <Typography variant="body1">
                  College: Jabalpur Engineering College, Jabalpur
                </Typography>
                <Typography variant="body1">
                  Degree: Master of Computer Application{" "}
                </Typography>
                <Typography variant="body1">
                Technology:{" "}  <b>ReactJs</b>
                </Typography>
                <Typography variant="body1">
                  Role - Front-End Development
                </Typography>
              </div>
            </Grid>
            <Grid item xs={5}>
              <div>
                <img src={vk} className="pic" />
              </div>
              <div>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Name: <b>Vikrant Pandey</b>
                </Typography>
                <Typography variant="body1">
                  College: Jabalpur Engineering College, Jabalpur
                </Typography>
                <Typography variant="body1">
                  Degree: Master of Computer Application{" "}
                </Typography>
                <Typography variant="body1">
                  Technology:{" "}
                  <b>ExpressJs, GraphQl, MongoDB, Node.js, ReactJs</b>
                </Typography>
                <Typography variant="body1">
                  Role: Backend Development, Front-End development and
                  integration
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      {/* Purpose Of project */}
      <Container style={{ paddingTop: "60px", paddingButtom: "100px" }}>
        <div>
          <Typography variant="body1">
            Online food ordering is the way to order food through various online
            web and mobile applications from nearby restaurants, cafe as per
            customer’s choice and requirement, but most of the time it is
            expensive instead we can get tiffin service at reasonable price.
            <br />
            <br />
            So the tiffin service is also a very essential service. Online
            Tiffin Ordering is the process of ordering tiffin online. It is a
            simple and convenient way for customers to get tiffin service. This
            is why, Tiffin Ordering App is going to be developed.
            <br />
            <br />
            The purpose of the system is to serve as a platform between service
            provider and their customer also to assist the customer to get
            better services at best rate. It involves various activities such as
            creating account, login, searching for tiffin services, getting
            reviews of providers, comparing and ordering. Also it will include
            feedback feature as well. We all love home cooked food. We can not
            eat restaurant food for a long time. So proposed system will simply
            solve this problem. As the name given to the project (HomeFood),
            this project is made for the person who needs tiffin services.
          </Typography>

          <Typography variant="h5" mt={3} sx={{ fontWeight: "bold" }}>
            Purpose of Project:
            <br />
            <br />
          </Typography>
          <Typography variant="body1" style={{}}>
            &#10003; &nbsp; We developed this application to provide best tiffin
            services to customers at the same time to enhance the earning of
            tiffin service providers.
            <br />
            <br />
            &#10003; &nbsp; This system helps customers to easily search tiffin
            providers near them.
            <br />
            <br />
            &#10003; &nbsp; This system provides help to compare various tiffin
            service providers in a particular area.
            <br />
            <br />
            &#10003; &nbsp; The system is developed to promote healthy food with
            minimum cost.
            <br />
            <br />
            &#10003; &nbsp; The system also provides customer to choose one day
            tiffin.
            <br />
            <br />
            &#10003; &nbsp; Providers can register in App and get customers
            easily.
            <br />
            <br />
            &#10003; &nbsp; Currently Tiffin providers can only reach customers
            manually so this system is proposed to make reach
            &nbsp;&nbsp;&nbsp;&nbsp;simple.
          </Typography>
        </div>
      </Container>
      <Footer />
    </>
  );
};

