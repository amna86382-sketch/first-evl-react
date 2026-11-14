import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/stats";
import IntakeForm from "../components/IntakeForm";
import Services from "../components/Services";
import Studies from "../components/Studies";
import SpecialistSchedule from "../components/SpecialistSchedule";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <IntakeForm />
        <Services />
        <Studies />
        <SpecialistSchedule />
      </main>
      <Footer />
    </>
  );
}
export default Home;
