import React from 'react';
import PropTypes from 'prop-types';

/**
 * Import serves for the only purpose to force Dash to load grasia-dash-components.
 * This is useful when you want to use grasia components that are going to be
 * added dynamically to the Dash app layout.
 */
export default class Import extends React.Component {

  render() {
    return null;
  }
}

Import.propTypes = {
  /**
  * The ID used to identify this component in Dash callbacks
  */
  id: PropTypes.string
};
