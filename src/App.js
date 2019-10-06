import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import Accomodations from './components/Accomodations';
import Rooms from './components/Rooms';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const [key, setKey] = useState('home');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home">
        <Accomodations />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Rooms />
      </Tab>
    </Tabs>
  );
}

export default App;
