import './App.css';
import ButtonComponent from "./components/commons/button.jsx";

function App() {

    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <div className="bg-black w-full flex flex-col gap-4 items-center p-10 justify-center">
            <ButtonComponent onClick={handleClick} variant="primary">Join Community</ButtonComponent>
            <ButtonComponent onClick={handleClick} variant="secondary">RSVP</ButtonComponent>
            <ButtonComponent onClick={handleClick} variant="accent">View Calendar</ButtonComponent>
        </div>
    );
}

export default App;