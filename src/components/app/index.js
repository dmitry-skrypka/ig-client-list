import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './container';

export class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	console.log(this.props)
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
