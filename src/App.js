import React from 'react';
import Converter from './components/Converter/Converter';
import StartEnd from './components/StartEnd/StartEnd';
import TabList from './components/TabList/Tablist';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <TabList list={[
            {
              "name": "Converter",
              "route": "/convert",
              "id": 1
            },
            {
              "name": "Start-End",
              "route": "/start-end",
              "id": 2
            },
            {
              "name": "Timer",
              "route": "/timer",
              "id": 3
            }
          ]}/>
          <Route exact path="/">
            <Redirect to="/convert" />
          </Route>
          <Route exact path="/convert" component={Converter} />
          <Route exact path="/start-end" component={StartEnd} />
          {/*<Route exact path="/timer" component={} /> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
