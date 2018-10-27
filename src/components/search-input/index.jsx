import React from "react";

import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";

export class SearchInput extends React.Component {
  handleInput = event => {
    this.props.onChange(event);
  };

  render() {
    return (
      <Input
        fluid
        icon="search"
        placeholder="Search..."
        onChange={this.handleInput}
      />
    );
  }
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired
};
