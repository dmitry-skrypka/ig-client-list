import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';
import getDataFromLocalJson from '../../helpers/getDataFromLocalJson';
import { URL } from '../../helpers/config';

export class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getDataFromLocalJson(URL).then(data => {
      this.props.getData(JSON.parse(data));
    });
  }

  render() {
    return (
      <Fragment>
        <div>Hello</div>
      </Fragment>
    );
  }
}

UserList.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
