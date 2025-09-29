import TypographyComponent from "../components/commons/typography.jsx";

function HomePage () {
    return (
        <div className={"mx-auto"}>
            <TypographyComponent as={"h1"} variant={"h1"}>
                Welcome to the Home Page
            </TypographyComponent>
        </div>
    )
}

export default HomePage;