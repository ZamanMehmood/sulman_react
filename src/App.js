import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import './App.css';
 import HomePage from './homepage';
import AboutPage from './aboutpage';
import NavBar from './navbar';
import DashBroadPage from './dashbroadpage';


function App() {
  return (
  <div>
   <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/navbar" element={<NavBar /> }/>
          <Route  path="/dashbroad" element={<DashBroadPage/>}/>
          <Route path= "/about" element={<AboutPage />} />
      </Routes>
   </Router>
    </div>
  );
}

export default App;
