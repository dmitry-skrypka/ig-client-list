import React from "react";

import PropTypes from "prop-types";
import { Header, Icon, Input } from "semantic-ui-react";

export class Title extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    const { name, icon } = this.props;
    return (
      <Header as="h4" textAlign="center">
        <Header.Content>
          <Icon centered name={icon} />
          {name}
        </Header.Content>
      </Header>
    );
  }
}

Title.propTypes = {

	name: PropTypes.string,
	icon: PropTypes.string
};
