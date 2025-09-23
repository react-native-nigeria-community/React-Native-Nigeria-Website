import './App.css';
import AccordionComponent from "./components/commons/accordion.jsx";

function App() {

    const accordionItems = [
        {
            title: "Who can join the community?",
            content: "Yes, joining the community is completely free. We believe in open knowledge sharing and collaboration.",
        },
        {
            title: "Is membership free?",
            content: "Yes, joining the community is completely free. We believe in open knowledge sharing and collaboration.",
        },
        {
            title: " Do I need prior experience with React Native?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
        {
            title: "How do I get updates on events and activities?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
        {
            title: "Can I showcase my React Native projects?",
            content: "No, beginners are welcome. The community offers resources and mentorship to help you get started.",
        },
    ];

    return (
        <div>
            <AccordionComponent items={accordionItems} allowMultiple={false} />
        </div>
    );
}

export default App;