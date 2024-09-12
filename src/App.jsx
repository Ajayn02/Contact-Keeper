import './App.css'
import  { Toaster } from 'react-hot-toast';
import "./bootstrap.min.css"
import Home from './pages/Home';
import CategoryCard from './components/CategoryCard';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Log from './pages/Log';
function App() {

  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Landing/>}  />
      <Route path='/home' element={<Home/>}  />
      <Route path='/view' element={<CategoryCard/>}  />
      <Route path='/log' element={<Log/>}  />
      <Route path='/sign' element={<Signup/>}  />
    </Routes>
     <Toaster />
     <Footer/>
    </>
  )
}

export default App
