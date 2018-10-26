import React from "react";

import PropTypes from "prop-types";
import { Input } from "semantic-ui-react";


export class SearchInput extends React.Component {
  constructor() {
    super();
  }

  handleInput = (event, value) => {
    console.log(event.target.value);
    this.props.onChange(event);

  };

  render() {

    return (
      <Input
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
