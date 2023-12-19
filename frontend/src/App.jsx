import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateImage from "./pages/CreateImage";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateImage />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
