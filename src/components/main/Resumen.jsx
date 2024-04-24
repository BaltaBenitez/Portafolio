import hero1 from '../../assets/hero1.jpg'

const Resumen = () =>  {
    return(
        <div className="container my-4">
            <div className="d-md-flex">
                <div className='mx-auto text-center'>
                    <img src={hero1} alt='selfie' width={80} className="rounded-5"/>
                </div>
                <div className='mx-auto'>
                    <h1>Holaa, soy<span className='text-warning'> Baltii</span></h1>
                    <p className='h5'>Desarrollador Front-end React de Buenos Aires.</p>
                    <p className="h5">Especializado en alpicaciones web de <span className='text-warning'>una sola página</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Resumen