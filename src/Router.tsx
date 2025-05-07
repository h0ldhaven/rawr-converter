import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={''} />
        <Route path='*' element={''} />
      </Routes>
    </Router>
  );
};

export default App;
