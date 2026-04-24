// src/navigation.js
import { useNavigate } from "react-router-dom";

export function useAppNavigation() {
    const navigate = useNavigate();

    return {
        goToHome: () => navigate("/home"),
        goToAbout: () => navigate("/about-us"),
        // goToEvents: () => navigate("/events"),
        // goToContact: () => navigate("/contact"),
    };
    
}
