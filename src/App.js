import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";
import Features from "./components/Features";
import Advantages from "./components/Advantages";
import Customizable from "./components/Customizable";
import Testimonial from "./components/Testimonial";
import ContainerCollection from "./components/ContainerCollection";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Star from "./components/Star";

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Advantages />
      <Customizable />

      <div className="test">
        <p>TESTIMONIAL</p>
        <h1>What Out Users<br /> Say About Us?</h1>
      </div>

      <Testimonial />

      <div className="faq">
        <p>FAQ</p>
        <h1>Frequently Asked <br /> Questions</h1>
      </div>
      
      <ContainerCollection />
      <Download />
      <Footer />
      <Star />
    </>
  );
}
