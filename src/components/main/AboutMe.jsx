import hero2 from '../../assets/hero2.jpg'

const AboutMe = () => {
    return(
        <div className="container m-auto">
            <div className="row">
                <div className="col-8">
                    <h2 className="text-left">Sobre Mi</h2>
                    <p className="text-left">
                        Me llamo Batasar Benitez, pero mis amigos me dicen Balti o Baltu. 
                        <span className="text-warning">Empecé en la "programación" a mitad del 2023 porque estaba aburrido. </span> 
                        Actualmente estoy buscando trabajo.
                    </p>
                    <p className="text-left">
                        Me interesé en un bootcamp de <span className="text-warning">Desarrollo Web</span>. 
                        Al finalizar obtuve los conocimientos de HTML, CSS, BOOTSTRAP, control de versiones con GIT y cómo tener buen SEO. 
                    </p>
                </div>
                <div className="col-4">
                    <div className='text-center my-5'>
                        <img src={hero2} width={90} className='rounded-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe