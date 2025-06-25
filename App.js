import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Prod from './Header';
import Hospital from './Menu';




function App() {

  return (
    <div>
      <Prod/>
      <Hospital/>
    </div>
    
  );
}

export default App;