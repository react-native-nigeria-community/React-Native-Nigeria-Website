import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import AboutUs from "./pages/about-us.jsx";
import Contact from "./pages/contact.jsx";

function App() {
// just a dummy text
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;