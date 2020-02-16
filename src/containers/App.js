import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoudary from '../components/ErrorBoundary';
import { setSearchField, setRobots } from '../actions';


export class App extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = 
      robots.filter(robot => {
        return robot.name
          .toLowerCase()
          .includes(searchField.toLowerCase());
    });
    
    return isPending? <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robo Friends</h1>
          <Scroll>
            <ErrorBoudary>
              <SearchBox searchChange={onSearchChange}></SearchBox>
              <CardList robots={ filteredRobots } /> 
            </ErrorBoudary>        
          </Scroll>
        </div>
      );
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