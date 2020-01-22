import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import { buyFeature } from '../actions/featuresActions';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyFeature={props.buyFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
};

export default connect(
  mapStateToProps,
  { buyFeature }
)(AdditionalFeatures);