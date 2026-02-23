import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { OrderForm } from './components/OrderForm';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
