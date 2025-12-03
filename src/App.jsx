import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";

const App = () => {
  const location = useLocation();

  return (
    <SmoothScroll>
      <PageTransition>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
        </Routes>
      </PageTransition>
    </SmoothScroll>
  );
};

export default App;
