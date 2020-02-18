import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { setSearchField, setRobots } from '../actions';
import MainPage from './MainPage';


export class App extends Component {

  render() {
    return <MainPage {...this.props} />
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(setRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);