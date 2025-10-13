import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import AboutUs from "./pages/about-us.jsx";

function App() {
// just a dummy text
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
        </Routes>
    );
}

export default App;