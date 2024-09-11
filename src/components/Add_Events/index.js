import React, { useState } from "react";
import "./AddEvents.css";
import TextField from "@mui/material/TextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  LinearProgress,
} from "@mui/material";

const categories = [
  "Technology",
  "Education",
  "Health",
  "Sports",
  "Arts",
  "Business",
  "Entertainment",
];

const AddEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [startDate, setStartDate] = useState(""); // Initialize as an empty string
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [theme, setTheme] = useState("");
  const [price, setPrice] = useState(0);
  const [capacity, setCapacity] = useState(0);
  const [aboutOpportunity, setAboutOpportunity] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [error, setError] = useState("");
  const [eventFormat, setEventFormat] = useState("");
  const [eventType, setEventType] = useState("");

  // Calculate progress based on fields filled
  const calculateProgress = () => {
    const fields = [
      eventTitle,
      startDate,
      startTime,
      endTime,
      location,
      theme,
      price,
      capacity,
      aboutOpportunity,
      eventFormat,
      eventType,
    ];

    const filledFields = fields.filter((field) => field !== "" && field !== 0);
    const progress = (filledFields.length / fields.length) * 100;
    return progress;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eventData = {
      eventTitle,
      startDate,
      startTime,
      endTime,
      location,
      theme,
      price,
      capacity,
      aboutOpportunity,
      categories: selectedCategories,
      keywords,
      eventFormat,
      eventType,
    };
    console.log("Event data: ", eventData);
  };

  const handleOpportunityChange = (value) => {
    setAboutOpportunity(value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategories(event.target.value);
  };

  const handleKeywordChange = (e) => {
    const input = e.target.value;
    const keywordArray = input.split(",").map((kw) => kw.trim());

    if (keywordArray.length > 5) {
      setError("You can only add up to 5 keywords.");
      return;
    }

    const totalLength = keywordArray.reduce(
      (acc, curr) => acc + curr.length,
      0
    );
    if (totalLength > 60) {
      setError("Total length of keywords must be less than 60 characters.");
      return;
    }

    setKeywords(keywordArray);
    setError("");
  };

  return (
    <div className="add-event-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <LinearProgress variant="determinate" value={calculateProgress()} />
        <p>{Math.round(calculateProgress())}% Completed</p>
      </div>
      <form className="add-events" onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div>
          <FormControl fullWidth>
            <InputLabel id="format-label">Select Event Format</InputLabel>
            <Select
              labelId="format-label"
              value={eventFormat}
              onChange={(e) => setEventFormat(e.target.value)}
              required
            >
              <MenuItem value="Conference">Conference</MenuItem>
              <MenuItem value="Workshop">Workshop</MenuItem>
              <MenuItem value="Seminar">Seminar</MenuItem>
              <MenuItem value="Webinar">Webinar</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <label>Event Title</label>
          <input
            type="text"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
        </div>

        <div class="date-picker-container">
          <label>Event Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="time-container">
        <div className="start-time">
          <label>Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <p className="open-date">Abstract Open Date <br/>12/12/2024</p>
        </div>

        <div className="end-time">
          <label>End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
          <p className="open-date">Registration Open Date <br/>12/12/2024</p>
        </div>
      </div>


        <div>
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Theme</label>
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>

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
                  {selected.length > 0
                    ? selected.join(", ")
                    : "Choose Categories"}
                </div>
              )}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  <Checkbox
                    checked={selectedCategories.indexOf(category) > -1}
                  />
                  <ListItemText primary={category} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div>
          <FormControl>
            <FormLabel>What is the Event Type?</FormLabel>
            <RadioGroup
              aria-label="event-type"
              name="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              row
            >
              <FormControlLabel
                value="inperson"
                control={<Radio />}
                label="In-person"
              />
              <FormControlLabel
                value="virtual"
                control={<Radio />}
                label="Virtual"
              />
              <FormControlLabel
                value="hybrid"
                control={<Radio />}
                label="Hybrid"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div>
          <label>Keywords (max 5, total letters &lt; 60):</label>
          <input
            type="text"
            value={keywords.join(", ")}
            onChange={handleKeywordChange}
            placeholder="Enter Keywords separated by commas"
          />
          {error && <p style={{ color: "red" }}>{error}</p>}

          <div className="keyword-container">
            {keywords.map((keyword, index) => (
              <span key={index} className="keyword-box">
                {keyword}
              </span>
            ))}
          </div>
        </div>

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

        <button className="add-event-btn" type="submit">Create Event</button>
      </form>{" "}
    </div>
  );
};

export default AddEvent;
