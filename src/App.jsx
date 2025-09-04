import Button from './components/common/button';
import InputField from "./components/common/input-field";
import './App.css'
import {useState} from "react";

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
                    <InputField
                        id="email"
                        type="email"
                        className={"w-lg h-10 focus:outline-none"}
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error}
                    />
                    <Button type="submit" variant="primary" onClick={handleSubmit}>
                        Subscribe
                    </Button>
                </div>
            </form>

            <div className="mt-5 px-3 flex items-center gap-3 border-1 rounded-sm border-bd-secondary/50 py-1">
                <div className="border-r-1 py-4 pr-2">
                    <img src="../public/assets/svg/check-mark.svg"  alt="check-mark" className="h-6" />
                </div>
                <InputField id={"Full Name"} label={"Full Name"} type="text" placeholder="Write here..." className="flex focus:outline-none w-lg h-10" />
            </div>

            <div className="border-1 mt-5 p-5 border-bd-secondary/50 rounded-sm">
                <InputField as="textarea" label="Message" placeholder="Write here..." rows="7" className="w-full block focus:outline-none resize-none" />
            </div>
        </>
    );
}

export default App;
