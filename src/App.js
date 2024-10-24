import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import Base from './components/Base';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
function App() {
  return (
    //  <div className="App">
    //    <h1>This is my HomePage</h1>
    //    <Button color='success' >Click Here</Button>
    // </div>
  <BrowserRouter>
   <Routes>
  <Route path='h' element="<h1>this is home page</h1>" />
  <Route path='home' element={<Home/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/signup' element={<Signup/>} />
  <Route path='/about' element={<About/>} />

   </Routes>
  </BrowserRouter>
    
  );
}

export default App;
