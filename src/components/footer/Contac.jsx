const Contac = () => {
    const correo = 'baltaarex363@gmail.com'
    const gitHubURl = 'https://github.com/BaltaBenitez'
    
    const year = new Date().getFullYear()

    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">baltasar benitez @ {year}</div>
                    <div className="col text-center">
                        <a href={correo} target="_blank" rel="noopener noreferrer" className="p-1"><i className="bi bi-envelope-at"></i></a>
                        <a href={gitHubURl} target="_blank" rel="noopener noreferrer" className="p-1"><i className="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contac