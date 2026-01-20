import './App.css';
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import HomePage from "./pages/home.jsx";
import AboutUs from "./pages/about-us.jsx";
import Contact from "./pages/contact.jsx";
import NavbarComponent from "./components/layouts/navbar.jsx";
import FooterComponent from "./components/layouts/footer.jsx";
import NewsletterComponent from "./components/sections/newsletter.jsx";
import Events from "./pages/event.jsx";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import EventDetails from "./pages/EventDetails.tsx";



function App() {
    
    return (
        <LanguageProvider>
         <ScrollToTop />
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/events" element={<Events />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/event-details" element={<EventDetails />} />
            </Routes>
            <NewsletterComponent />
            <FooterComponent />
        </LanguageProvider>
        
    );
}

export default App;