
import {Link} from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import './index.css'

const Header=()=>{
   
    return(
        <nav className='nav-cnt'>
           <div className='header-cnt'>
                <div className='first-cnt'>
                    <div className='logo-cnt'>
                        <Link to="/"><img src="https://techstory.in/wp-content/uploads/2014/08/10times.jpg" alt="website logo" className='logo'/></Link> 
                    </div>
                    <div className='header-input-cnt'>
                        <input  className='search-input' type="search" placeholder='Search for Topic, Event or Location'/>
                        <IoIosSearch className="search-icon" size={20}/>
                    </div>
                </div>
                <div className='sec-cnt'>
                    <ul className='list-cnt'>
                        <li className='list-item'>
                            <Link to="/events" className="link-item">Events</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/top" className="link-item">Top100</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/venue" className="link-item">Venues</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/company" className="link-item">Companies</Link>
                        </li>
                        <li className='list-item'>
                            <Link to="/hub" className="link-item">Hub</Link>
                        </li>
                    
                        <hr className='hr-line'/>
                    
                        <li className='list-item add-cnt'>
                            <IoAddSharp size={30}/> 
                            <Link className="link-item add-para" to="/add-event"><p className='add-para'>Add Event</p></Link>
                        </li>

                        <li className='list-item'>
                            <Link class="link-item" to="/login">
                              <button className='login-btn'>Login</button>
                            </Link>
                        </li>
                    </ul>
                </div>
           </div>
        </nav>
    )
}

export default Header