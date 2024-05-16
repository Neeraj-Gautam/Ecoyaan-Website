import React from "react";
import Navbar from "../Navbar/navbar";
import Carousel from "../Carousel/carousel";
import HomeBody from "../HomeBody/HomeBody";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default HomePage;
