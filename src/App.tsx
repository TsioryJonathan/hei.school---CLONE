import About from "./components/About";
import Admission from "./components/Admission";
import Domains from "./components/Domains";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JobProspects from "./components/JobProspects";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Program from "./components/Program";
import Team from "./components/Team";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden h-fit">
      <Navbar />

      <Hero />
      <About />
      <Team />
      <JobProspects />
      <Domains />
      <Admission />
      <Program />
      <Technologies />
      <Partner />

      <Footer />
    </div>
  );
}
export default App;
