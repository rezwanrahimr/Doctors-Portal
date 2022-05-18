import {React,useEffect,useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [user,loading] = useAuthState(auth);
    const [appointments,setAppointments] = useState([]);
    useEffect( ()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointments(data))
       }
    },[user])
   
    return (
        <div>
            <h2>my appointment : {appointments.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointments.map((appointment,index) =>    <tr>
                <th>{index}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
              </tr>)
        }
     
   
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppointments;