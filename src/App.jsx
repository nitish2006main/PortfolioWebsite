import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectPage from './components/ProjectPage.jsx'

function App() {
  const path = window.location.pathname

  if (path.startsWith('/projects/')) {
    const slug = path.split('/projects/')[1].replace(/\/$/, '')

    return (
      <>
        <Navbar />
        <ProjectPage slug={slug} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App