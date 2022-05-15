import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";
// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const Login = () => {
    //   Login with email and password.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Forget password.
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
    // call navigate in react router dom.
    const navigate = useNavigate();

    // Login with Google.
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    if (error) {
        toast(error.message);
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (

            navigate("/home")
        )

    }

    return (
        <div class="hero min-h-screen ">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <h1>Login</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#"  class="label-text-alt link link-hover" onClick={async ()=>{
                                await sendPasswordResetEmail(email); toast('Send Email Verification')
                            }}>Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button onClick={() => signInWithEmailAndPassword(email, password)} class="btn btn-accent">Login</button>
                    </div >
                    <div>New to Doctors Portal?<span className='text-primary' onClick={() => navigate("/signup")}>Create new account</span></div>
                    <div class="divider">OR</div>
                    <div class="form-control mt-6">
                        <button onClick={() => { signInWithGoogle() }} class="btn btn-outline">CONTINUE WITH GOOGLE</button>
                    </div >
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default Login; <h1>This is login page</h1>