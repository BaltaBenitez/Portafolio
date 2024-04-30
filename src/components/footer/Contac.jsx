const Contac = ( {redesLink} ) => {
    const year = new Date().getFullYear()
    const miduDev = 'https://porfolio.dev/'
    /* <p>Este proyecto fue inspirado en el repositorio de <a href={miduDev} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-warning fst-italic"> MiduDev.</a></p> */

    return(
        <footer id='contacto' className="container text-center mt-4">
            <div className="row">
                <h6>@ {year} - Baltasar Benitez</h6>
                <p id="ul__footer" className="list-unstyled d-flex justify-content-center">
                    <a href={redesLink.gitHub} target="_blank" rel="noopener noreferrer" className="px-2"><i className="bi bi-github"></i></a>
                    <a href={redesLink.correo} target="_blank" rel="noopener noreferrer" className="px-2"><i className="bi bi-envelope-at"></i></a>
                    <a href={redesLink.linkedIn} target="_blank" rel="noopener noreferrer" className="px-2"><i className="bi bi-linkedin"></i></a>
                </p>
            </div>
        </footer>
    )
}

export default Contac