import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Committee } from "../components/Committee";
import { PaperSubmission } from "../components/PaperSubmission";
import { Sponsors } from "../components/Sponsors";
import { Venue } from "../components/Venue";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Countdown } from "../components/Countdown";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Countdown />
      <About />
      <Committee />
      <PaperSubmission />
      <Sponsors />
      <Venue />
      <Footer />
    </div>
  );
}