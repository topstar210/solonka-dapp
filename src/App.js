import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layouts.jsx";
import Home from "pages/Home.jsx";
import Drops from "pages/Drops.jsx";
import Roadmap from "pages/Roadmap.jsx";
import Gems from "pages/Gems.jsx";
import NoPage from "pages/NoPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gems" element={<Gems />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/drops" element={<Drops />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
