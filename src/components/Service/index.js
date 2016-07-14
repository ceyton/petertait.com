import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Radium from 'radium';
import Isvg from 'react-inlinesvg';

import vars from '../../vars';

class Service extends Component {
  render() {
    return (
      <div style={[styles.service, styles[this.props.nthChild]]}>
        <div style={styles.inner}>
          <span style={styles.image}>
            <Isvg src={this.props.image} />
          </span>
          <h2 style={styles.title}>{this.props.title}</h2>
          <p style={styles.summary}>{this.props.summary}</p>
        </div>
      </div>
    )
  }
}

var styles = {
  service: {
    display: 'flex',
    width: '33%',

  },
  odd: {
    marginLeft: '10px',
    marginRight: '10px'
  },
  inner: {
    textAlign: 'center',
    border: '1px solid white',
    padding: '60px 40px 30px'
  },
  image: {
    display: 'block',
    marginBottom: '50px'
  },
  title: {
    fontFamily: vars.fontSans,
    fontSize: vars.beta,
    lineHeight: '1.2',
    marginBottom: '15px'
  },
  summary: {
    fontSize: vars.delta
  }
}

module.exports = Radium(Service);
