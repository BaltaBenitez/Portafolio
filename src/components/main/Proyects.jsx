import pageArena from '../../assets/page-arena.png'
import pageRedBull from '../../assets/page-redbull.png'

const Proyects = () => {
    const arenaURl = 'https://arenasportgym.netlify.app/'
    const arenaTitle = 'arena sport gym'
    const arenaGit = 'https://github.com/BaltaBenitez/mi-repo.git'
    const redBullURl = 'https://rb-20.netlify.app/'
    const redbullTitle = 'red bull online shop'
    const redbullGit = 'https://github.com/BaltaBenitez/49970-Rjs.git'

    return(
        <div className="container my-4">
            <h2><i className="bi bi-code-slash"></i> Proyectos</h2>
            <div className="row">
                <div className="col my-3 d-md-flex flex-column flex-sm-row justify-content-center justify-content-md-center align-items-center">
                    <div className='text-center'>
                        <a href={arenaURl} target="_blank" rel="noopener noreferrer"><img src={pageArena} alt="" width={400}/></a>
                    </div>
                    <div className='mx-5 my-4'>
                        <h3><strong>{arenaTitle.toUpperCase()}</strong></h3>
                        <p>Fue el proyecto final del bootcamp de Desarrollo web.</p>
                        <p className='btn btn-outline-dark'><a href={arenaGit} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-light'>Más información en <i className="bi bi-github"></i></a></p>
                    </div>
                </div>
                <div className="col my-3 d-md-flex flex-column flex-sm-row justify-content-center justify-content-md-center align-items-center">
                    <div className='text-center'>
                        <a href={redBullURl} target="_blank" rel="noopener noreferrer"><img src={pageRedBull} alt="" width={400}/></a>
                    </div>
                    <div className='mx-5 my-4'>
                        <h3><strong>{redbullTitle.toUpperCase()}</strong></h3>
                        <p>Fue el proyecto final del bootcamp de Frontend React.</p>
                        <p className='btn btn-outline-dark'><a href={redbullGit} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-light'>Más información en <i className="bi bi-github"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects