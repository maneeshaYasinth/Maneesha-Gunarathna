import Navbar from './components/navbar'
import Home from './components/home'
import ContactForm from './components/contact'
import About from './components/about'
import Education from './components/Education'
import Experience from './components/Experience'
import TrailingDotGrid from './components/TrailingDotGrid'

function App() {
  return (
    <>
  <div className="fixed inset-0 -z-10">
    <TrailingDotGrid />
  </div>

  <Navbar />
  <main className="bg-transparent">
      <Home />
      <About />
      <Education />
      <Experience />
      <ContactForm />
  </main>
</>

  );
}

export default App;
