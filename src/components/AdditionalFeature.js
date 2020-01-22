import React from 'react';
import { connect } from 'react-redux';
import { buyFeature } from '../actions/featuresActions';

const AdditionalFeature = props => {
  return (
    <li>
      <button className="button" onClick={() => props.buyFeature(props.feature.id)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    
  };
};

export default AdditionalFeature;
