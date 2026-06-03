import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import { profile } from './data/portfolioData'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
