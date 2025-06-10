import Lottie from 'lottie-react';
import signInLottie from "../../assets/signInLottie.json"
import SocialLogin from './SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useRef, useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signIn } = useAuth();
    const emailRef = useRef();
    const location = useLocation();
    const Navigate = useNavigate();

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password).then(() => {
            Navigate(location?.state || '/')
            Swal.fire({
                title: "Login successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });
        }).catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                title: errorMessage,
                icon: "error",
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <Lottie style={{ maxWidth: '400px' }} animationData={signInLottie} loop={true} ></Lottie>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold">Sign In now!</h1>
                            <form onSubmit={handleSignIn}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name="email" className="input" ref={emailRef} placeholder="Email" />

                                    <fieldset className='relative'>
                                        <label className="label">Password</label>
                                        <input type={showPassword ? "text" : "password"} name='password' className="input" placeholder="Password" />
                                        <a onClick={() => setShowPassword(!showPassword)} className='btn btn-sm absolute top-1/3 right-5 bg-transparent border-0 z-10 hover:border hover:border-red-500'>{showPassword ? <LuEyeOff /> : <LuEye />}</a>
                                    </fieldset>

                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <label className=' lable mt-2'> <input type="checkbox" name="terms" className="checkbox" required /> Accept Terms and Conditions</label>
                                    <button className="btn btn-neutral mt-4">Sign In</button>
                                    <p>Don't have an account? <Link to='/register' className='link link-primary'>Register</Link></p>
                                </fieldset>
                            </form>

                            {/* Social  Login   */}
                            <SocialLogin ></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;