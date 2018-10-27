import React, { Fragment } from "react";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import getDataFromLocalJson from "../../helpers/getDataFromLocalJson";
import { findFromList } from "../../helpers/searchInArray";
import { URL } from "../../helpers/config";
import ClientList from "../list";
import { InfoTab } from "../info-tab";
import { SearchInput } from "../search-input";
import { Grid } from "semantic-ui-react";
import { Title } from "../title";
export class App extends React.Component {
  componentDidMount() {
    getDataFromLocalJson(URL).then(data => {
      this.props.getData(JSON.parse(data));
    });
  }
  handleItemClick = data => {
    this.props.onSelect(data);
  };

  handleSearchInput = event => {
    const value = event.target.value,
      { data } = this.props;

    this.props.onInputChange(findFromList(data, value));
  };
  render() {
    const { data_to_render, selected } = this.props;

    return (
      <Fragment>
        <Grid celled container>
          <Grid.Row style={{ background: "#e7ecec" }}>
            <Grid.Column width={5}>
              <Title name={"Clients"} icon={"users"} />
            </Grid.Column>
            <Grid.Column width={11}>
              <Title name={"Info"} icon={"info circle"} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}>
              <SearchInput onChange={this.handleSearchInput} />
              <ClientList
                data={data_to_render}
                selected={selected}
                onSelect={this.handleItemClick}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <InfoTab selected={selected} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
