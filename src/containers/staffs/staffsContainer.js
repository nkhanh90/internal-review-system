import React from "react";
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { fetchStaffs } from './../../actions/staffsAction';
import { fetchLocations } from './../../actions/locationsAction';
import { fetchTitles } from './../../actions/titlesAction';

import Item from './../../components/staffs/indexes/Item/index';
import Search from "../../components/staffs/indexes/SearchBar";

import './staffs.css'

const propTypes = {
  staffs: PropTypes.array.isRequired,
  onFetchStaffs: PropTypes.func.isRequired,
  onFetchLocations: PropTypes.func.isRequired,
  onFetchTitles: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    onFetchStaffs: (params) => dispatch(fetchStaffs(params)),
    onFetchTitles: () => dispatch(fetchTitles()) ,
    onFetchLocations: () => dispatch(fetchLocations())
  };
}

function mapStateToProps(state) {
  return {
    staffs: state.staffs.staffs,
    loading: state.staffs.loading,
    locations: state.locations.locations,
    titles: state.titles.titles
  };
}

class Staffs extends React.Component {

  constructor() {
    super();
    this.state = {
      search: {
        location: 'HCM',
        title: 'Developer',
        name: ''
      }
    }
  }

  componentDidMount() {
    const params = {
      page: 1,
      filters: {
        location: this.state.search.location,
        title: this.state.search.title,
        name: this.state.search.name
      }
    }
    this.props.onFetchTitles().then(() => {
      this.props.onFetchLocations().then(() => {
        this.props.onFetchStaffs(params)
      })
    })
  }

  render() {
    const staffs = this.props.staffs
    const locations = this.props.locations
    const titles = this.props.titles

    var searchBox = this.state.search

    if (staffs.length > 0 && locations.length > 0 && titles.length > 0) {
      return (
        <div>
          <h3 className='text-center'>
            Here is everyone at GO1 FAMILY
          </h3>
          <Search { ...searchBox } titles={titles} locations={locations} staffs={staffs}/>
          {staffs.map((staff) =>
            <Item key={staff.userId} {...staff}/>
          )}
        </div>
      );
    }
    else {
      return (
        <div>
          Loading
        </div>
      )
    }
  }
}

Staffs.propTypes = propTypes;

const staffsContainer = connect(mapStateToProps, mapDispatchToProps)(Staffs);

export default staffsContainer;