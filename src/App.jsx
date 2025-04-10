import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Program";
import Title from "./components/title/Title";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subTitle="Nos programmes" title="Ce que nous offrons" />
          <Programs />
          <About />
          <Title subTitle="Galerie" title="Galerie de photos" />
          <Gallery />
          <Title subTitle="Témoignages" title="Ce que les gens disent" />
          <Testimonials />
          <Title subTitle="Contactez-nous" title="Tenez-nous au courant" />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
