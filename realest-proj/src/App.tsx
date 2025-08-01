import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navigation";
import Hero from "./components/Hero";
import PropertyListings from "./components/PropertyListings";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactFors";
import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toaster position="top-right" richColors closeButton />

      <Navigation />
      <Hero />
      <PropertyListings />
      <AboutUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
