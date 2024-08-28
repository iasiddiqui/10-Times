import {Component} from 'react'
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import './index.css'

class Login extends Component{
    state={isSignup : false}

    OnSignup=()=>{
      this.setState({isSignup : true})
    }

    renderLoginPage=()=>{
        return(
            <div className='login-cnt'>
                <h1 className='login-heading'>Login</h1>
                <form className='login-form-cnt'>
                    <div className='input-cnt'>
                        <label className='label-name' htmlFor="name" >Username</label>
                        <div className='user-input-cnt'>
                          <FaRegUser className='user-icon'/>
                          <input className='input' id="name" type="text" placeholder='Enter username or email'/>
                        </div>
                        
                    </div>
                    <div className='input-cnt'>
                        <label className='label-name' htmlFor="password">Password</label>
                        <div className='user-input-cnt'>
                            <RiLockPasswordLine className='user-icon'/>
                            <input className='input' id="password" type="password" placeholder='Enter Password' maxlength="8" pattern=".{8,}" title="Password must be at least 8 characters long" required/>
                        </div>
                        
                    </div>
                    <button type="submit" className='login-button'>Login</button>
                </form>
                <p className='signup-para'>Or <br/> <span className='span-signup' onClick={this.OnSignup}>SignUp</span></p>
            </div>
        )
    }

    renderSignupPage=()=>{
        return(
            <div className='login-cnt'>
                <h1 className='login-heading'>SignUp</h1>
                <form className='login-form-cnt'>
                    <div className='input-cnt signup-cnt'>
                        <label className='label-name' htmlFor="email" >Email</label>
                        <div className='user-input-cnt'>
                          <MdOutlineMail className='user-icon'/>
                          <input className='input' id="name" type="email" placeholder='Enter email'/>
                        </div>
                    </div> 
                    <div className='input-cnt signup-cnt'>
                        <label className='label-name' htmlFor="name" >Username</label>
                        <div className='user-input-cnt'>
                          <FaRegUser className='user-icon'/>  
                          <input className='input' id="name" type="text" placeholder='Enter username'/>
                        </div>
                        
                    </div>
                    <div className='input-cnt signup-cnt'>
                        <label className='label-name' htmlFor="password">Password</label>
                        <div className='user-input-cnt'>
                          <RiLockPasswordLine className='user-icon'/>
                          <input className='input' id="password" type="password" placeholder='Enter Password' maxlength="8" pattern=".{8,}" title="Password must be at least 8 characters long" required/>
                        </div>
                       
                    </div>
                    <button type="submit" className='login-button signup-button'>Sign up</button>
                </form>
                
            </div>
        )
    }
    render(){
        const {isSignup}=this.state
        return(
            <div className='register-page'>
                {isSignup ? this.renderSignupPage() : this.renderLoginPage()}
            </div>
        )
    }
}
export default Login