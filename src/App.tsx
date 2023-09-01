import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { VendingMachine } from './pages/VendingMachine';

function App() {
  return (
		<BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Login/>} />
	      <Route path="/vending-machine" element={<VendingMachine url={process.env.REACT_APP_BACKEND_URL + "/products"}/>} />
	      <Route path="/*" element={<NotFound/>} />
	    </Routes>
		</BrowserRouter>
  );
}

export default App;
