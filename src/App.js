import Home from "./pages/home";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {DestinationA, Europa, Mars, Titan} from "./pages/destinationA";
import {CrewA, CrewB, CrewC, CrewD} from "./pages/crewA";
import {TechnologyA,TechnologyB,TechnologyC} from "./pages/technologyA";
import MobileNav from "./components/mobileNav";

function App() {
  return (

          <div className="main">
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="crewA" element={<CrewA />} />
                      <Route path="destinationA" element={<DestinationA />} />
                      <Route path="technologyA" element={<TechnologyA />} />
                      <Route path="mars" element={<Mars />} />
                      <Route path="europa" element={<Europa />} />
                      <Route path="titan" element={<Titan />} />
                      <Route path="crewB" element={<CrewB />} />
                      <Route path="crewC" element={<CrewC />} />
                      <Route path="crewD" element={<CrewD />} />
                      <Route path="technologyB" element={<TechnologyB />} />
                      <Route path="technologyC" element={<TechnologyC />} />
                  </Routes>
              </BrowserRouter>
          </div>



  );
}

export default App;
