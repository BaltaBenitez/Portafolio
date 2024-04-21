import AboutMe from "./AboutMe"
import Resumen from "./Resumen"
import Proyects from "./Proyects"

const Hero = () => {
    return(
        <main className="container">
            <Resumen />
            <Proyects />
            <AboutMe />
        </main>
    )
}

export default Hero