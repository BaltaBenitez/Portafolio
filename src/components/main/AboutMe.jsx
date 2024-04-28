import hero2 from '../../assets/hero2.jpg'


const AboutMe = () => {
    return(
        <div id='sobreMi' className="container mt-5">
            <div className="row">
            <h2 className="mt-5"><i className="bi bi-person-gear"></i> Sobre Mi</h2>
            <div className="d-md-flex flex-row-reverse">
                <div className='m-auto text-center'>
                    <img src={hero2} width={90} className='rounded-5' />
                </div>
                <div>
                    <p>
                        Me llamo Batasar Benitez, pero mis amigos me dicen Balti o Balta. 
                        <span className="text-warning"> Empecé en la "programación" a mitad del 2023 porque estaba aburrido. </span> 
                        Actualmente estoy buscando trabajo.
                    </p>
                    <p>
                        Me interesé en un bootcamp de <span className="text-warning">Desarrollo Web</span>. 
                        Trabajando con HTML & CSS. <span className="text-warning">Implemente las prácticas de versionado de código con GIT</span>, y preprocesadores como SASS.
                        Al finalizar, supe cómo aplicar Bootstrap a mis proyectos, y <span className="text-warning">lo importante del SEO en el desarrollo</span>. 
                        Para entregar el proyecto final subirlo a un servido "grautitio" y como a interactuar con este servicio.
                    </p>
                    <p>
                        En marzo de 2024 termine el bootcamp de <span className="text-warning">Desarrollo Frontend React</span>. 
                        Donde aprendi, <span className="text-warning">el manejo de rutas utilizando Firebase</span>, y comprendi el uso del virtual DOM mediante los componentes de React JS.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutMe