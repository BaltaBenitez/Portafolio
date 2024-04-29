import AboutMe from "./AboutMe"
import Resumen from "./Resumen"
import Proyects from "./Proyects"

const Hero = ( {props} ) => {
    return(
        <main className="container">
            <Resumen prop={props}/>
            <Proyects />
            <AboutMe />
        </main>
    )
}

export default Hero