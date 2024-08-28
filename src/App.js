import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/LogIn'
import TopEvent from  './components/Topevents'
import Venues from './components/Venues'
import './App.css';
const App=()=>(
  <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/top" element={<TopEvent/>}></Route>
      <Route path="/venue" element={<Venues/>}></Route>
     </Routes>
   </BrowserRouter>
  </>
)

export default App