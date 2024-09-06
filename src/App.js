import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/LogIn";
import TopEvent from "./components/Topevents";
import Venues from "./components/Venues";
import "./App.css";
import EventTarget from "./components/EventItem/index";
import AddEvent from "./components/Add_Events";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/top" element={<TopEvent />}></Route>
        <Route path="/venue" element={<Venues />}></Route>
        <Route path="/event" element={<EventTarget />}></Route>
        <Route path="/add-event" element={<AddEvent />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
