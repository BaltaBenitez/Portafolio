import { useState } from "react";

const Header = () =>{
    const [collapse, setCollapse] = useState(true)
    const titleBb = 'benitez'
    
    const scrollTop = () => {
        window.scrollTo({
            top: -1,
            //behavior: "smooth"
        });
    };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <h1 onClick={scrollTop} className="mx-auto fs-5 fst-italic"><strong className="title-b">{titleBb.toUpperCase()}</strong></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapse(!collapse)}>
                {collapse ? (<i className="bi bi-list"></i>) : (<i className="bi bi-x-lg"></i>)}
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item">
                            <a href="#proyectos" className="nav-link text-light">PROYECTOS</a>
                        </li>
                        <li className="nav-item">
                            <a href="#sobreMi" className="nav-link text-light">SOBRE MI</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contacto" className="nav-link text-light">CONTACTO</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;