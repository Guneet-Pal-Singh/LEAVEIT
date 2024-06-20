import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Card from './Components/Card';
// import TopBar from './Components/Top_bar';
import LOGIN from './LOGIN';
import Home from './Home';
import TakeHelp from './TakeHelp';
// import Men_tshirts from './men_tshirts';
import Leave_drug from './Leave_drug';
import SuggestDoctor from './SuggestDoctor';
// import PaymentPage from './Components/payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LOGIN />} />
        <Route path="/" element={<Home />} />
        <Route path="/Leave-Drugs" element={<Leave_drug />} />
        <Route path="/TakeHelp" element={<TakeHelp />} />
        <Route path="/SuggestDoctor" element={<SuggestDoctor />} />
        
      </Routes>
    </Router>
  );
}

export default App;
