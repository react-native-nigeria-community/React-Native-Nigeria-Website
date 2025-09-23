import './App.css';
import TypographyComponent from "./components/commons/typography.jsx";

function App() {

    return (
        <div>
            <TypographyComponent variant="h1" as="h1">Heading 1</TypographyComponent>
            <TypographyComponent variant="h2" as="h2">Heading 2</TypographyComponent>
            <TypographyComponent variant="h3" as="h3">Heading 3</TypographyComponent>
            <TypographyComponent variant="h4" as="h4">Heading 4</TypographyComponent>
            <TypographyComponent variant="h5" as="h5">Heading 5</TypographyComponent>
            <TypographyComponent variant="h6" as="h6">Heading 6</TypographyComponent>
            <TypographyComponent variant="p" as="p">Paragraph</TypographyComponent>
        </div>
    );
}

export default App;