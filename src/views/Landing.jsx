import Greeting from "../components/Greeting";
import About from "../components/About";
import Specialty from "../components/Specialty";
import Experience from "../components/Experience";

function Landing() {
    return (
        <>
            <Greeting/>
            <About/>
            <Specialty/>
            <Experience/>
        </>
    );
}

export default Landing;