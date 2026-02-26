import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { OrderForm } from './components/OrderForm';
import { ChatBotForm } from './components/Chatbot';

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/chatbot" element={<ChatBotForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
