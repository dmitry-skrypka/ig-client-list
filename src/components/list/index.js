import React, { Fragment } from 'react';
import { List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { ClientItem } from './client-item';

export default class ClientList extends React.Component {
  render() {
    console.log(this.props);

    if (this.props.data.length) {
      const clients = this.props.data;
      const clientArray = clients.map((client, index) => (
        <ClientItem key={index} client={client} />
      ));
      return <List>{clientArray}</List>;
    }
    return <div> NOTHING</div>;
  }
}

ClientList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
