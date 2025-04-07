import { useState } from "react";
import "./App.css";
import Header from "../src/components/Header/Header";
import Hero from "../src/components/Hero/Hero";
import ChairmanSpeech from "../src/components/ChairmanSpeech/ChairmanSpeech";
import About from "./components/About/About";
import Product from "./components/Products/Product";
import Services from "./components/Services/Services";
import Offerings from "./components/Offerings/Offerings";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";
import OurOfferings from "./components/Offerings/OurOfferings";
import ParentTestComponent from "./components/test/Parent.test";
import SimpleOfferings from "./components/Offerings/SimpleOfferings";
import Choose from "./components/WhyChooseUs/Choose";
import PortalScroll from "./components/Hero/Cover";


function App() {
  return (
    <>
      <div className="">
        <Header />
        {/* <Hero /> */}
        <PortalScroll/>
        <ChairmanSpeech />

        <About />
        <Services/>
        {/* <OurOfferings/> */}
        {/* <SimpleOfferings/> */}
        <Offerings />
        <Product />
        {/* <Services /> */}
        {/* <WhyChooseUs /> */}
        <Choose/>
        <Footer />
      </div>
    </>
  );
}

export default App;
