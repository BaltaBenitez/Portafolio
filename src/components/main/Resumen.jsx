import hero1 from '../../assets/hero1.jpg'

const Resumen = () =>  {
    return(
        <div className="container">
            <div className="row">
                <div className="col-8">
                    <div className="text-left my-5">
                        <h1>Holaa, soy<span className='text-warning'> Baltii</span></h1>
                        <p className='h5'>Desarrollador Front-end React de Buenos Aires, Arg</p>
                        <p className="h5">Especializado en alpicaciones web de <span className='text-warning'>una sola página</span>.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="text-center my-5">
                        <img src={hero1} alt='selfie' width={80} className="rounded-5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resumen