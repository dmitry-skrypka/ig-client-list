import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';
import getDataFromLocalJson from '../../helpers/getDataFromLocalJson';
import { URL } from '../../helpers/config';
import ClientList from "../list";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getDataFromLocalJson(URL).then(data => {
      this.props.getData(JSON.parse(data));
    });
  }

  render() {
  	const data = this.props.data_to_render
    return (
      <Fragment>
        <ClientList data={data}/>
      </Fragment>
    );
  }
}

App.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
