import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from '../containers/city';

class CityList extends Component {
  // componentWillMount(){
  //   // an action to load cities
  //   this.props.setCities();
  // }
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  };

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
