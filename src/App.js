import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Accomodations from './components/Accomodations';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [key, setKey] = useState('home');

  return (
    <>
      <Accomodations />
    </>
  );
}

export default App;
