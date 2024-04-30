import './App.css'
import Contac from './components/footer/Contac'
import Header from './components/header/Header'
import Hero from './components/main/Hero'

function App() {
  const socialLinks = {
    gitHub: 'https://github.com/BaltaBenitez',
    correo: 'baltaarex363@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/baltasar-benitez-31a486306/'
  }

  return (
    <>
      <Header />
      <Hero props={socialLinks}/>
      <Contac redesLink={socialLinks}/>
    </>
  )
}

export default App
