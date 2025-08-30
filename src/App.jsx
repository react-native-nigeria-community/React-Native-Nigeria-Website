import Button from './components/common/button';
import './App.css'

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

    return (
        <div className="flex flex-col gap-4 items-center p-10 justify-center monotone-noise">
            <Button onClick={handleClick} variant="primary">Join Community</Button>
            <Button onClick={handleClick} variant="secondary">RSVP</Button>
            <Button onClick={handleClick} variant="accent">View Calendar</Button>
        </div>
    );
}

export default App;
