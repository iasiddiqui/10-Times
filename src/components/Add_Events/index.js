import React, { useState } from 'react';
import './index.css';
import { DatePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import { Select, MenuItem, Checkbox, ListItemText, InputLabel, FormControl } from '@mui/material';

const categories = [
  'Technology',
  'Education',
  'Health',
  'Sports',
  'Arts',
  'Business',
  'Entertainment',
];

const AddEvent = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [subject, setSubject] = useState('');
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [aboutOpportunity, setAboutOpportunity] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [keywords, setKeywords] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      eventTitle,
      startDate,
      startTime,
      endTime,
      location,
      subject,
      price,
      capacity,
      aboutOpportunity,
      categories: selectedCategories,
      keywords,
    };
    console.log('Event data: ', eventData);
  };

  const handleOpportunityChange = (value) => {
    setAboutOpportunity(value); // Using the value from ReactQuill
  };

  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit}>
        {/* Event Title */}
        <div>
          <label>Event Title</label>
          <input 
            type="text" 
            value={eventTitle} 
            onChange={(e) => setEventTitle(e.target.value)} 
            required
          />
        </div>

        {/* Date Picker */}
        <div>
          <label>Event Date</label>
          <DatePicker 
            label ="Select Date"
            value={startDate} 
            onChange={(date) => setStartDate(date)} 
            renderInput={(params) => <TextField {...params} />}
            required
          />
        </div>

        {/* Start and End Time (Side by Side) */}
        <div className="time-container">
          <div className="start-time">
            <label>Start Time</label>
            <input 
              type="time" 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)} 
              required 
            />
          </div>

          <div className="end-time">
            <label>End Time</label>
            <input 
              type="time" 
              value={endTime} 
              onChange={(e) => setEndTime(e.target.value)} 
              required 
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label>Location</label>
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            placeholder="Enter location" 
            required 
          />
        </div>

        {/* Subject */}
        <div>
          <label>Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter Subject"
          />
        </div>

        {/* Categories */}
        <div>
          <FormControl fullWidth>
            <InputLabel id="categories-label">Choose Categories</InputLabel>
            <Select
              labelId="categories-label"
              multiple
              value={selectedCategories}
              onChange={handleCategoryChange}
              renderValue={(selected) => (
                <div>
                  {selected.length > 0 ? selected.join(', ') : 'Choose Categories'}
                </div>
              )}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox checked={selectedCategories.indexOf(category) > -1} />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* Keywords */}
        <div>
          <label>Keywords</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Enter Keywords"
          />
        </div>

        {/* Ticket Price */}
        <div>
          <label>Ticket Price</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            min="0" 
            required 
          />
        </div>

        {/* Capacity */}
        <div>
          <label>Event Capacity</label>
          <input 
            type="number" 
            value={capacity} 
            onChange={(e) => setCapacity(e.target.value)} 
            min="0" 
            required 
          />
        </div>

        {/* About Opportunity with Rich Text Editor */}
        <div>
          <label htmlFor="aboutOpportunity">Summary:</label>
          <ReactQuill
            theme="snow"
            value={aboutOpportunity}
            onChange={handleOpportunityChange}
            placeholder="Mention all the details of the opportunity, including rules, eligibility, process, format, etc."
            required
          />
          <p>Minimum Word Limit: 500</p>
          <p>Guidelines:</p>
          <ul>
            <li>Mention all the guidelines like eligibility, format, etc.</li>
            <li>Inter-college team members allowed or not.</li>
            <li>Inter-specialization team members allowed or not.</li>
            <li>The number of questions/problem statements.</li>
            <li>Duration of the rounds.</li>
          </ul>
          <p>Rules:</p>
          <ul>
            <li>Mention the rules of the competition.</li>
          </ul>
        </div>

        <button type="submit">Create Event</button>
      </form>
    </LocalizationProvider>
  );
};

export default AddEvent;
