import About from "./components/About";
import Domains from "./components/Domains";
import Hero from "./components/Hero";
import JobProspects from "./components/JobProspects";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App() {
  return (
    <div>
      <Navbar />

      <Hero />
      <About />
      <Team />
      <JobProspects />
      <Domains />
    </div>
  );
}
export default App;
