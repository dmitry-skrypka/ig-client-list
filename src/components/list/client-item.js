import React from "react";

import PropTypes from "prop-types";

import { List, Image } from "semantic-ui-react";

export class ClientItem extends React.Component {
  handleItemClick = () => {
    const { client } = this.props;
    this.props.onClick(client);
  };
  render() {
    let selected = false;
    const { avatar, firstName, lastName } = this.props.client.general;
    const { title } = this.props.client.job;
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
