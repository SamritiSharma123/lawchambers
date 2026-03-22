import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Practice from "../components/Practice";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home(){
  return(
    <>
      <Header/>
      <Hero/>
      <About/>
      <Practice/>
      <Contact/>
      <Footer/>
    </>
  );
}
