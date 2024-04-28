import hero1 from '../../assets/hero1.jpg'

const Resumen = () =>  {
    const status0 = 'disponible'
    const status1 = 'no disponible'

    return(
        <div className="container my-5">
            <div className="d-md-flex">
                <div className='mx-auto text-start'>
                    <img src={hero1} alt='selfie' width={75} className="rounded-5 rounded-circle"/>
                    <span className="d-line mx-3">{true ? status0.toLocaleUpperCase() : status1.toLocaleUpperCase()}</span>
                    <span className="d-line mx-3">estoy al pedo</span>
                    <div className='mx-auto  text-wrap'>
                        <h1>Holaa, soy<span className='text-warning'> Baltii</span></h1>
                        <h3>Desarrollador Front-end React de Buenos Aires.</h3>
                        <h4>Especializado en alpicaciones web de <span className='text-warning'>una sola página</span>.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resumen