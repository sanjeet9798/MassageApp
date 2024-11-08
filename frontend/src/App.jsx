import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Master from './components/Master';
import GoogleForm from './components/GoogleForm';
const App = () => {
  return (
      <Routes>
        <Route path="/*" element={<Master />} />
        <Route path="/GoogleForm" element={<GoogleForm />} />
      </Routes>
  );
};

export default App;
