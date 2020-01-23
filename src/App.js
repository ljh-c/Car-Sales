import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import Home from './components/Home';

const App = () => {

  return (
    <>
    <Route component={Home} exact path="/" />

    <Route path="/product" render={() => (

    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>

    )} />

    </>
  );
};

export default App;
