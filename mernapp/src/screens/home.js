import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="container-fluid">
      <div>
        <Navbar />
      </div>
      <div>
        <Carousel />
      </div>
      <div className="m-3">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-4 d-flex justify-content-center">
            <Card />
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
            <Card />
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
            <Card />
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
            <Card />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
