import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header"
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
