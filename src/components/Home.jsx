import React from "react";
import Contact from "./contact/Contact";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Intro from "./intro/Intro";
import Portfolio from "./portfolio/Portfolio";
import Topbar from "./topbar/Topbar";

const Home = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
