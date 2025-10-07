import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import AboutUs from "./pages/about-us.jsx";
import Contact from "./pages/contact.jsx";
import Events from "./pages/event.jsx";

function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
        </Routes>
    );
}

export default App;