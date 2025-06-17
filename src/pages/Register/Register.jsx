import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from '../../firebase/firebase.init';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../SignIn/SocialLogin';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser } = useAuth();
    const Navigate = useNavigate();
    const location = useLocation();

    const handleCreateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.PhotoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // createUser
        createUser(email, password).then(() => {
            Navigate(location?.state || '/')
            Swal.fire({
                title: "Login successfully!",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
            });

            // update user profile
            const profile = {
                displayName: name,
                photoURL: photo,
            }
            updateProfile(auth.currentUser, profile)
                .then(() => {
                    // Profile updated!

                }).catch((error) => {
                    const errorMessage = error.message;
                    Swal.fire({
                        title: errorMessage,
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1500
                    });
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

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-15">
            <title>Register</title>

            <div className="card-body">
                <h3 className="text-3xl text-center font-bold">Register now!</h3>
                <form onSubmit={handleCreateUser} className="fieldset">

                    {/* Name field */}
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />

                    {/* photoURL field */}
                    <label className="label">PhotoURL</label>
                    <input type="URL" name='PhotoUrl' className="input" placeholder="PhotoUrl" />


                    {/* email input */}
                    <label className="label">Email</label>
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" name='email' placeholder="mail@site.com" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>

                    {/* password input  */}
                    <label className="label">Password</label>
                    <label className="input validator relative">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />

                        <a onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute top-2 right-2 bg-transparent border-0 hover:border hover:border-red-500'>{showPassword ? <LuEyeOff /> : <LuEye />}</a>
                    </label>
                    <p className="validator-hint hidden">Must be more than 8 characters, including At least one number, lowercase letter, uppercase letter.</p>

                    <label className=' lable mt-2'> <input type="checkbox" name="terms" className="checkbox" required /> Accept Terms and Conditions</label>
                    <button className="btn btn-neutral mt-4 uppercase">Register</button>
                </form>
                <p>Already have an account? <Link to='/signIn' className='link link-primary'>Sign In</Link></p>

                {/* Social  Login   */}
                <SocialLogin/>
            
            </div>
        </div>
    );
};

export default Register;