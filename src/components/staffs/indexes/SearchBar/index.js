import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  onSelectChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    const titleItems = this.props.titles.map( ( title ) =>
      <option key = { title.code }>{ title.name }</option>
    )

    const locationItem = this.props.locations.map( ( location ) =>
      <option key={ location.code }>{ location.name }</option>
    )

    return (
      <div className='searchStaffPlugin'>
        <div className='form-group col-md-6'>
          <input type='text' className='form-control' id='staffName'
                 placeholder='Search Your Colleges' onChange={this.onInputChange}/>
        </div>
        <div className='form-group col-md-2'>
          <select id='staffTitle' className='form-control'>
            <option defaultValue>Title ...</option>
            {titleItems}
          </select>
        </div>
        <div className='form-group col-md-2'>
          <select id='staffLocation' className='form-control'>
            <option defaultValue>Location ...</option>
            { locationItem }
          </select>
        </div>
      </div>
    );
  }
}
