import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudiesPage from "./pages/CaseStudiesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
    </Routes>
  );
};

export default App;
