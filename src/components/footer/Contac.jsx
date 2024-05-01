const Contac = ( {redesLink} ) => {
    const year = new Date().getFullYear()

    return(
        <footer id='contacto' className="container text-center mt-4 px-4">
            <div className="d-sm-flex flex-column flex-sm-row justify-content-between">
                <h6>@ {year} - Baltasar Benitez</h6>
                <p id="ul__footer" className="list-unstyled">
                    <a href={redesLink.gitHub} target="_blank" rel="noopener noreferrer" className="px-2"><i className="bi bi-github"></i></a>
                    <a href={redesLink.correo} target="_blank" rel="noopener noreferrer" className="px-2"><i className="bi bi-envelope-at"></i></a>
                    <a href={redesLink.linkedIn} target="_blank" rel="noopener noreferrer" className="px-2"><i className="bi bi-linkedin"></i></a>
                </p>
            </div>
        </footer>
    )
}

export default Contac