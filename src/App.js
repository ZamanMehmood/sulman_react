import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import './App.css';
 import HomePage from './homepage';
import AboutPage from './aboutpage';
import NavBar from './navbar';
import DashBroadPage from './dashbroadpage';
import SingUpPage from "./singuppage";

function App() {
  return (
  <div>
   <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/navbar" element={<NavBar /> }/>
          <Route  path="/dashbroad" element={<DashBroadPage/>}/>
          <Route path= "/about" element={<AboutPage />} />
          <Route path="/signup" element={<SingUpPage />}/>
      </Routes>
   </Router>
    </div>
  );
}

export default App;
