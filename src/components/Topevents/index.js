import {useState} from 'react'
import Header from '../Header'
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Event from '../Event'
import './index.css'

const Events=[
   {id : 1, eventName : "Internation Tourism & Travel Show", date : '01-09 Aug 2024', location : 'Montreal canada', category : 'Travel & Tourism', rating : 3.4, following : 8432},
   {id : 2, eventName : "Canadian National Exhibition", date : '09-018 sep 2024', location : 'Toronto canada', category : 'Agriculture & Foresty', rating : 4.4, following : 3632},
   {id : 3, eventName : "Magic Las Vegas", date : '19-21 Aug 2024', location : 'Las Vegas USA', category : 'Fashion & Beauty', rating : 4.7, following : 3427},
   {id : 4, eventName : "Plastivison India", date : '07-11 dec 2024', location : 'Mumbai India', category : 'Packing & Packaging', rating : 4.2, following : 5643},
   {id : 4, eventName : "World Leadership International", date : '06-09 Aug 2024', location : 'Quebec canada', category : 'Education & Training', rating : 3.2, following : 4532},
   {id : 5, eventName : "Medica", date : '18-22 sep 2024', location : 'dussoldrof Germany', category : 'Medical & Pharma', rating : 4.3, following : 8712},
   {id : 6, eventName : "TextWorld Appreal", date : '11-15 nov 2024', location : 'Paris France', category : 'Fashion & Beauty ', rating : 4.1, following : 12942},
   {id : 7, eventName : "GulfFood", date : '11-18 dec 2024', location : 'Dubai UAE', category : 'Food & Beverages', rating : 3.5, following : 984},
   {id : 8, eventName : "MeatEx Canda", date : '03-08 sep 2024', location : 'Toronto canada', category : 'Food & Beverages', rating : 4.7, following : 7433},
]

const industryTypes = [
  { name: "Agriculture", value: "agriculture" },
  { name: "Automotive", value: "automotive" },
  { name: "Construction", value: "construction" },
  { name: "Education", value: "education" },
  { name: "Energy", value: "energy" },
  { name: "Finance", value: "finance" },
  { name: "Healthcare", value: "healthcare" },
  { name: "Hospitality", value: "hospitality" },
  { name: "Information Technology", value: "it" },
  { name: "Legal", value: "legal" },
  { name: "Manufacturing", value: "manufacturing" },
  { name: "Media", value: "media" },
  { name: "Retail", value: "retail" },
  { name: "Telecommunications", value: "telecommunications" },
  { name: "Transportation", value: "transportation" },
  { name: "Utilities", value: "utilities" },
  { name: "Real Estate", value: "real_estate" },
  { name: "Non-Profit", value: "non_profit" },
  { name: "Entertainment", value: "entertainment" },
  { name: "Tourism", value: "tourism" },
  { name: "Pharmaceuticals", value: "pharmaceuticals" },
  { name: "Biotechnology", value: "biotechnology" },
  { name: "Consumer Goods", value: "consumer_goods" },
  { name: "Aerospace", value: "aerospace" },
  { name: "Defense", value: "defense" },
  { name: "Textiles", value: "textiles" }
];


const TopEvent=()=>{
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [showInformation, setShowInformation]=useState(false)

    const onChangeSelect=(event)=>{
       setSelectedIndustry(event.target.value)
    }

    const onClickInfo=()=>{
        setShowInformation(!showInformation)
    }
    return(
     <div className="top-events-cnt">
        <Header/>
        <div className="top-events-header-cnt">
            <div className="top-events-heading-cnt">
                <h1 className="top-eveents-heading">Top 100 Events</h1>
                <p className="top-eveents-para">100 popular events, trade fairs, trade shows & conferences you should exhibit and participate at. Curated global ranking index & list of important trade events and biggest international shows<IoInformationCircleOutline className="infor-icon" onClick={onClickInfo}/></p>
                { showInformation &&<p className="information-para">We use 11 carefully calibrated indexes to provide the most comprehensive and balanced evaluation of the value visitors and exhibitors can drive from an event. These include - industry, audience reach, opportunities created, size, rating, audience spread, format, purchasing power of visitors, geographic location, international outlook & number of editions of an event.</p>}
            </div>
            <div className="top-event-drop-input-cnt">
                <select value={selectedIndustry} className="top-event-dropdown" onChange={onChangeSelect}>
                    {industryTypes.map(eachOption=>(
                        <option key={eachOption.value} vlaue={eachOption.value}>{eachOption.name}</option>
                    ))}
                </select>
                <div className="top-event-input-cnt">
                    <input type="search" placeholder="All Location" className="top-event-input-ele"/>
                    <CiSearch className="top-event-input-search-icon"/>
                </div>
            </div>
            
        </div>
        <div className='table-cnt'>
                <div className='table-column-cnt'>
                    <p className='table-col-name col-rank'>Rank</p>
                    <p className='table-col-name'>Event</p>
                    <p className='table-col-name col-date'>Latest Dates</p>
                    <p className='table-col-name'>Location</p>
                    <p className='table-col-name'>Category</p>
                    <p className='table-col-name'>Rating</p>
                    <p ></p>
                </div>
                <ul className='events-list-cnt'>
                    {Events.map(event=>(
                        <Event key={event.id} eventDetails={event}/>
                    ))}
                </ul>
            </div>
     </div>
    )
}
export default TopEvent