import About from "./components/About";
import Admission from "./components/Admission";
import Domains from "./components/Domains";
import Hero from "./components/Hero";
import JobProspects from "./components/JobProspects";
import Navbar from "./components/Navbar";
import Program from "./components/Program";
import Team from "./components/Team";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <Hero />
      <About />
      <Team />
      <JobProspects />
      <Domains />
      <Admission />
      <Program />
    </div>
  );
}
export default App;
