import './App.css'
import Typography from "./components/common/typography.jsx";

function App() {

    return (
        <>
            <div className="space-y-4 p-6">
                <Typography variant="h1" as="h1">Heading 1</Typography>
                <Typography variant="h2" as="h2">Heading 2</Typography>
                <Typography variant="h3" as="h3">Heading 3</Typography>
                <Typography variant="h4" as="h4">Heading 4</Typography>
                <Typography variant="h5" as="h5">Heading 5</Typography>
                <Typography variant="h6" as="h6">Heading 6</Typography>
                <Typography variant="p" as="p">Paragraph</Typography>
            </div>
        </>
    );
}

export default App;
