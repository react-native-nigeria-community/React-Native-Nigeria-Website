import './App.css';
import {useState} from "react";
import ButtonComponent from "./components/commons/button.jsx";
import InputFieldComponent from "./components/commons/input-field.jsx";
import CheckMarkSVG from "./assets/svg/check-mark.svg";

function App() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert(email);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex items-center border-1 border-bd-secondary/50  rounded-sm py-2 px-4">
                    <InputFieldComponent
                        id="email"
                        type="email"
                        className={"w-lg h-10 focus:outline-none"}
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error}
                    />
                    <ButtonComponent type="submit" variant="primary" onClick={handleSubmit}>
                        Subscribe
                    </ButtonComponent>
                </div>
            </form>

            <div className="mt-5 px-3 flex items-center gap-3 border-1 rounded-sm border-bd-secondary/50 py-1">
                <div className="border-r-1 py-4 pr-2">
                    <img src={CheckMarkSVG}  alt="check-mark" className="h-6" />
                </div>
                <InputFieldComponent id={"Full Name"} label={"Full Name"} type="text" placeholder="Write here..." className="flex focus:outline-none w-lg h-10" />
            </div>

            <div className="border-1 mt-5 p-5 border-bd-secondary/50 rounded-sm">
                <InputFieldComponent as="textarea" label="Message" placeholder="Write here..." rows="7" className="w-full block focus:outline-none resize-none" />
            </div>
        </>
    );
}

export default App;