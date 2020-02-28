import React, { Component } from 'react';
import CounterButton from '../components/CounterButton';
import CounterButton2 from '../components/CounterButton2';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoudary from '../components/ErrorBoundary';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
        return robot.name
          .toLowerCase()
          .includes(this.props.searchField.toLowerCase());
    });
  }

  render() {
    const { onSearchChange, isPending } = this.props;
    const filteredRobots = this.filterRobots();

    return isPending? <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Robo Friends</h1>
          <CounterButton />
          <CounterButton2 />
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

export default MainPage;
