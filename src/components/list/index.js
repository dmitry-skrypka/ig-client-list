import React from "react";
import { List, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";
import { ClientItem } from "./client-item";

export default class ClientList extends React.Component {
  render() {
    if (this.props.data.length) {
      const selected = this.props.selected;
      const arrayOfClients = this.props.data;
      const clients = arrayOfClients.map((client, index) => (
        <ClientItem
          key={index}
          client={client}
          selected={selected}
          onClick={this.props.onSelect}
        />
      ));
      return (
        <List selection animated divided>
          {clients}
        </List>
      );
    }
    return (
      <div style={{ padding: 10 }}>
        {" "}
        <Icon name="frown" />
        Nothing found...
      </div>
    );
  }
}

ClientList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};
