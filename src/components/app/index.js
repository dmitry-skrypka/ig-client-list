import React, { Fragment } from "react";

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./container";
import getDataFromLocalJson from "../../helpers/getDataFromLocalJson";
import { findFromList } from "../../helpers/searchInArray";
import { URL } from "../../helpers/config";
import ClientList from "../list";
import { InfoTab } from "../info-tab";
import { SearchInput } from "../search-input";
import { Container } from "semantic-ui-react";
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

  handleSearchInput = (event) => {

    this.props.onInputChange(findFromList(this.props.data, event.target.value));
  };
  render() {
    const data = this.props.data_to_render;
    const selected = this.props.selected;
    return (
      <Fragment>
        <Container>
          <div>
            <SearchInput onChange={this.handleSearchInput} />
            <ClientList
              data={data}
              selected={selected}
              onSelect={this.handleItemClick}
            />
            <InfoTab selected={selected} />
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
