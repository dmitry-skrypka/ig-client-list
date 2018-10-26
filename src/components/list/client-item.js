import React from 'react';

import PropTypes from 'prop-types';

import { List, Image } from 'semantic-ui-react';

export class ClientItem extends React.Component {
  constructor() {
    super();
  }

  render() {
    const avatar = this.props.client.general.avatar;
    const firstName = this.props.client.general.firstName;
    const lastName = this.props.client.general.lastName;
    const title = this.props.client.job.title;

    return (
      <List.Item>
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
  client: PropTypes.object,
};
