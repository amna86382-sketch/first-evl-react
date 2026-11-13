import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntakeForm from "../components/IntakeForm";
import Services from "../components/Services";
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IntakeForm />
        <Services />
      </main>
    </>
  );
}
export default Home;
