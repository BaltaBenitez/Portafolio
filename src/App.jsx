import './App.css'
import Contac from './components/footer/Contac'
import Header from './components/header/Header'
import Hero from './components/main/Hero'

function App() {
  const socialLinks = {
    gitHub: 'https://github.com/BaltaBenitez',
    correo: 'baltaarex363@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/baltasar-benitez-31a486306?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFf%2FsQ%2BoJRX2Ksf4e3aIc6A%3D%3D'
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
