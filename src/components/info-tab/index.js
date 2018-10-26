import React from "react";

import PropTypes from "prop-types";

import { Item, Icon } from "semantic-ui-react";

export class InfoTab extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props);
    if (this.props.selected.general) {
      const { avatar, firstName, lastName } = this.props.selected.general;
      const { email, phone } = this.props.selected.contact;
      const { city, country, street, zipCode } = this.props.selected.address;
      const { company, title } = this.props.selected.job;
      return (
        <Item.Group divided>
          <Item>
            <Item.Image size="small" src={avatar} />

            <Item.Content>
              <Item.Header>
                {firstName} {lastName}
              </Item.Header>
              <Item.Meta>
                <span>
                  {title} in {company}
                </span>
              </Item.Meta>

              <Item.Extra>
                <Icon centered name="mail" /> email: {email}
              </Item.Extra>
              <Item.Extra>
                {" "}
                <Icon centered name="phone square" />
                phone: {phone}
              </Item.Extra>
              <Item.Extra>
                {" "}
                <Icon centered name="map marker alternate" />
                {country} {city} {street} {zipCode}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      );
    } else {
      return <span>Please select Client</span>;
    }
  }
}
InfoTab.propTypes = {
  selected: PropTypes.object
};
