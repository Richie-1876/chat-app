import React from 'react'
import loginImage from '../../assets/images/login.svg'

import '../auth/Auth.scss'

const Login = () => {
    return (
        <div id='auth-container'>
            <div id='auth-card'>
                <div className='card-shadow'>
                    <div id='image-section'>
                        <img src={loginImage} alt='login'/>
                    </div>

                    <div id='form-section'>
                        <h2>Welcome back</h2>

                        <form>
                            <div className='input-field mb-1'>
                                <input placeHolder='Email'/>
                            </div>
                            <div className='input-field mb-2'>
                                <input placeHolder='Password'/>
                            </div>
                          

                          <button>LOGIN</button>
                        </form>
                        <p>Don't have an account? Register</p>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default Login