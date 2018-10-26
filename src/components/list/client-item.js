import React from "react";

import PropTypes from "prop-types";

import { List, Image } from "semantic-ui-react";

export class ClientItem extends React.Component {
  constructor() {
    super();
  }
  handleItemClick = () => {
    this.props.onClick(this.props.client);
  };
  render() {
    // console.log(this.props)
    let selected = false;
    const avatar = this.props.client.general.avatar;
    const firstName = this.props.client.general.firstName;
    const lastName = this.props.client.general.lastName;
    const title = this.props.client.job.title;
    if (
      this.props.selected &&
      JSON.stringify(this.props.selected) === JSON.stringify(this.props.client)
    ) {
      selected = !selected;
    }
    return (
      <List.Item
        onClick={this.handleItemClick}
        style={{ background: selected ? "#e7ecec" : "white" }}
      >
        <Image size="mini" avatar circular src={avatar} />

        <List.Content>
          <List.Header>
            {firstName} {lastName}
          </List.Header>
          <List.Description>{title}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}
ClientItem.propTypes = {
  client: PropTypes.object
};
