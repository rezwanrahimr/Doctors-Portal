import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Reviews from './components/Reviews/Reviews';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<Appointment></Appointment>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
