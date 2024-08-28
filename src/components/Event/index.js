
import EventItem  from "../EventItem";
import { FaRegStar } from "react-icons/fa";
import './index.css'

const Event=(props)=>{
    const {eventDetails}=props
    const {id, eventName, date, location, category, rating,  following}=eventDetails
    
    const setActivId=()=>{
       return <EventItem eventDetails={eventDetails}/>
    }
    
    return(
       <li className='event-row-cnt'>
        <p className='row-id'>{`${id}`}</p>
        <p className='row-event-name' onClick={setActivId}>{`${eventName}`}</p>
        <p className='row-event-date'>{`${date}`}</p>
        <p className='row-event-location'>{`${location}`}</p>
        <p className='row-event-category'>{`${category}`}</p>
        <p className='row-event-rating'>{`${rating}`} <FaRegStar className="star-icon"/></p>
        <div className='row-follow-cnt'>
            <p className='row-follow-para'>{`${following}`} Following</p>
            <button className='row-button'><FaRegStar className="star-icon-btn"/> Intrested</button>
        </div>
        
       </li>
       
    
    )
}
export default Event