import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Properties from './pages/Properties'
import Services from './pages/Services'
import Error404 from './pages/Error404'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PropertyDetails from './pages/PropertyDetails'

const App = () => {
  return (
    <>
    <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/properties' element={<Properties />} />
            <Route path='/:id' element={<PropertyDetails />} />
            <Route path='/properties/:id' element={<PropertyDetails />} />
            <Route path='/services' element={<Services />} />
            <Route path='*' element={<Error404 />} />
        </Routes>
    <Footer />
    </>
  )
}

export default App