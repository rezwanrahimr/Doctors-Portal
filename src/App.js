import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Appointment from './components/Appointment/Appointment';
import Reviews from './components/Reviews/Reviews';
import ContactUs from './components/ContactUs/ContactUs';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequreAuth from './components/RequreAuth/RequreAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyAppointments from './components/Dashboard/MyAppointments';
import MyReview from './components/Dashboard/MyReview';
import Users from './components/Dashboard/Users';
import History from './components/Dashboard/History'

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<RequreAuth><Appointment></Appointment></RequreAuth>}></Route>
       <Route path='/reviews' element={<Reviews></Reviews>}></Route>
       <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/appoin'></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='/dashboard' element={<RequreAuth><Dashboard></Dashboard></RequreAuth>}>
        <Route index element={<MyAppointments></MyAppointments>}> </Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
        <Route path='history' element={<History></History>}></Route>
        <Route path='users' element={<Users></Users>}></Route>
       </Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
