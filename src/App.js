import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Singup';
import About from './pages/About';
import Service from './pages/Service';
function App() {
  return (
     
       <div>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/services" element={<Service/>}/>
         </Routes>
       </BrowserRouter>
       </div>
  );
}

export default App;
