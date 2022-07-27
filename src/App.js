import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/travel-agency-page/" element={<Home />} />
          <Route path="/travel-agency-page/services" element={<Services />} />
          <Route path="/travel-agency-page/products" element={<Products />} />
          <Route path="/travel-agency-page/sign-up" element={<SignUp />} />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
