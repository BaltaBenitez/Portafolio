const Header = () =>{
    return(
        <header className="mb-2 sticky-top">
            <div className="container-fluid bg-dark sticky-top">
                <div className="row">
                    <div className="col d-flex justify-content-center">
                        <a href="#proyectos" className="nav-link p-3 text-light">PROYECTOS</a>
                        <a href="#sobreMi" className="nav-link p-3 text-light">SOBRE MI</a>
                        <a href="#contacto" className="nav-link p-3 text-light">CONTACTO</a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;