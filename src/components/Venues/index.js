import { IoSearch } from "react-icons/io5";
import Header from '../Header'
import './index.css'

const Venues=()=>{
    return(
       <div className='venues-container'>
        <Header/>
        <div className='venues-search-input-container'>
            <h1 className='venus-input-heading'><span className='ten-head'>10</span >times<span className='venus-head'>venues</span></h1>
            <p className='venue-input-para'>Event Venues for Your Next Event</p>
            <div className='venue-input-cnt'>
                <input className='venue-input' type="search" placeholder='Search by: city, country or venue names'/>
                <IoSearch className="venue-input-icon"/>
            </div>
        </div>
       </div>
    )
}
export default Venues