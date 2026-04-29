import './App.css';
import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import HomePage from "./pages/home";
import AboutUs from "./pages/about-us";
import Contact from "./pages/contact";
import NavbarComponent from "./components/layouts/navbar";
import FooterComponent from "./components/layouts/footer";
import NewsletterComponent from "./components/sections/newsletter";
import Events from "./pages/event";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import EventDetails from "./pages/EventDetails";
import NewsletterArchive from "./pages/newsletters";
import Campus from './pages/campus';

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
                <Route path="/campus" element={<Campus />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/event-details" element={<EventDetails />} />
                <Route path="/newsletters" element={<NewsletterArchive />} />
            </Routes>
            <NewsletterComponent />
            <FooterComponent />
        </LanguageProvider>
    );
}

export default App;
