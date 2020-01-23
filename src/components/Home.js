import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { minivan, mustang } from '../actions/featuresActions';

const Home = props => {
  return (
    <div className="starter">
      <h1>Choose a product</h1>
      <Link to="/product"><p onClick={() => props.mustang()}>Mustang</p></Link>
      <Link to="/product"><p onClick={() => props.minivan()}>Minivan</p></Link>
    </div>
    
  );
};

export default connect(null, { minivan, mustang })(Home);