import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate,useLocation} from "react-router-dom";
// import react toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';

const Login = () => {
    
    //   Login with email and password.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    // handleEmailandPassword.
    const handleEmailAndPassword = async(e) =>{
      
       await signInWithEmailAndPassword(e.email,e.password);
    }

    // Forget password.
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
    // call navigate in react router dom.
    const navigate = useNavigate();
        
    // Login with Google.
    const [signInWithGoogle,Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

    const [token] = useToken(user || Guser)

    
    if (error || Gerror) {
        toast(error.message);
    }
    if (loading || Gloading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });

    }
    console.log(user)

    return (
        <div className="hero min-h-screen ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1>Login</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#"  className="label-text-alt link link-hover" onClick={async ()=>{
                                await sendPasswordResetEmail(email); toast('Send Email Verification')
                            }}>Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={() => handleEmailAndPassword({email, password})} className="btn btn-accent">Login</button>
                    </div >
                    <div>New to Doctors Portal?<span className='text-primary' onClick={() => navigate("/signup")}>Create new account</span></div>
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

export default Login;