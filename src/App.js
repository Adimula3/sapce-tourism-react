import Home from "./pages/home";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import DestinationA from "./pages/destinationA";
import CrewA from "./pages/crewA";
import TechnologyA from "./pages/technologyA";

function App() {
  return (

          <div className="main">
              <BrowserRouter>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="crewA" element={<CrewA />} />
                      <Route path="destinationA" element={<DestinationA />} />
                      <Route path="technologyA" element={<TechnologyA />} />
                  </Routes>
              </BrowserRouter>
          </div>



  );
}

export default App;
