import React from "react";
import { List, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import { ClientItem } from "./client-item";


export default class ClientList extends React.Component {
  render() {
    if (this.props.data.length) {
      const clients = this.props.data;
      const clientArray = clients.map((client, index) => (
        <ClientItem
          key={index}
          client={client}
          selected={this.props.selected}
          onClick={this.props.onSelect}
        />
      ));
      return (
        <List selection animated divided>
          {clientArray}
        </List>
      );
    }
    return (
      <div style={{ padding: 10 }}>
        {" "}
        <Icon centered name="frown" />
        Nothing Found...{" "}
      </div>
    );
  }
}

ClientList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
