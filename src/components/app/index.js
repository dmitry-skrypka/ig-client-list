import React, { Fragment } from "react";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import getDataFromLocalJson from "../../helpers/getDataFromLocalJson";
import { findFromList } from "../../helpers/searchInArray";
import { URL } from "../../helpers/config";
import ClientList from "../list";
import { InfoTab } from "../info-tab";
import { SearchInput } from "../search-input";
import { Container, Grid, Header, Icon } from "semantic-ui-react";
import { Title } from "../title";
export class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    getDataFromLocalJson(URL).then(data => {
      this.props.getData(JSON.parse(data));
    });
  }
  handleItemClick = data => {
    this.props.onSelect(data);
  };

  handleSearchInput = event => {
    this.props.onInputChange(findFromList(this.props.data, event.target.value));
  };
  render() {
    const data = this.props.data_to_render;
    const selected = this.props.selected;
    return (
      <Fragment>
        {/*<Container>*/}
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
                data={data}
                selected={selected}
                onSelect={this.handleItemClick}
              />
            </Grid.Column>
            <Grid.Column width={11}>
              <InfoTab selected={selected} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {/*</Container>*/}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
