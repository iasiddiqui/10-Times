
import Header from '../Header'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import './index.css'

const EventItem=()=>{
        const {eventDetails}=this.props
        const { eventName, date, location,  rating}=eventDetails
    return(
        <div className='event-items-container'>
            <Header/>
                <div className='event-item-cnt'>
                    <div className='event-details-cnt'>
                        <div className='event-profile-cnt'>
                            <div className='date-revie-cnt'>
                                <p className='event-profile-date'>{`${date}`}</p>
                                <button className='event-profile-review'> <FaStar size={20}/> Add a review</button>
                            </div>
                            <div className='event-profile-details-cnt'>
                                <h1 className='event-profile-heading'>{`${eventName}`}</h1>
                                <button className='event-profile-rating'><FaStar size={20} className='event-profile-star-icon'/> {`${rating}`}</button>
                                <button className='event-profile-location'><FaLocationDot size={20} className='event-profile-location-icon'/> {`${location}`}</button>
                            </div>
                        </div>
                        <div className='event-intrest-cnt'>

                        </div>
                    </div>
                </div>
        </div>
      
    )
 
}

export default EventItem
