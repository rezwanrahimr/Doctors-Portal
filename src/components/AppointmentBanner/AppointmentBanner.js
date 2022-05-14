import {React} from 'react';
import bannerimg from '../../assets/images/chair.png'
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = ({date,setDate}) => {
    console.log(date,setDate);
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={bannerimg} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <DayPicker 
                mode="single"
                selected={date}
                onSelect={setDate}
                
                />
                
                
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;