import Navbar from './components/navbar'
import Home from './components/home'
import Achivements from './components/achivements'
import ContactForm from './components/contact'
import About from './components/about'
import Education from './components/Education'
import EducationPage from './pages/EducationPage'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (<>
  
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactForm" element={<ContactForm />} />
      </Routes>

    </>
  );
}

export default App
