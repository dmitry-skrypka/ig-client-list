import React from 'react';

import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react';

export class Title extends React.Component {
  render() {
    const { name, icon } = this.props;
    return (
      <Header as="h4" textAlign="center">
        <Header.Content>
          <Icon name={icon} />
          {name}
        </Header.Content>
      </Header>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};
