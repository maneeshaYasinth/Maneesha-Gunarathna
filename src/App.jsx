import Navbar from './components/navbar'
import Home from './components/home'
import ContactForm from './components/contact'
import About from './components/about'
import EducationPage from './pages/EducationPage'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (<>
  
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Education" element={<EducationPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>

    </>
  );
}

export default App
