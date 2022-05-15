import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from "react-router-dom";
// import create user.
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const navigate = useNavigate();
    // SignInWith Google.
    const [signInWithGoogle] = useSignInWithGoogle(auth);
   

    // create user with email and password.
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    console.log(email,password)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      if(user){
          toast('Account Create Successfuly')
      }
      if(user){
          navigate("/home")
      }
       if(loading){
           return <p>Loading...</p>
      }
      else if(error){
          toast(error.message)
      }
    return (
        <div className="hero min-h-screen ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 >Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={() => createUserWithEmailAndPassword(email,password)} className="btn btn-accent">Sign-up</button>
                    </div >
                    <div>Already Have a Account?<span className='text-primary' onClick={() => navigate("/login")}>Login</span></div>
                    <div className="divider">OR</div>
                    <div className="form-control mt-6">
                        <button onClick={() => { signInWithGoogle() }} className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                    </div >


                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;