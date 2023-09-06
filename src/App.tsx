import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { VendingMachine } from './pages/VendingMachine';

function App() {
  console.log(process.env);
  return (
		<BrowserRouter>
	    <Routes>
	      <Route path="/" element={<Login url={process.env.REACT_APP_BACKEND_URL}/>} />
	      <Route path="/vending-machine" element={<VendingMachine url={process.env.REACT_APP_BACKEND_URL}/>} />
	      <Route path="/*" element={<NotFound/>} />
	    </Routes>
		</BrowserRouter>
  );
}

export default App;
