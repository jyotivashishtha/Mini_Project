import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize = 6;
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div className="p-3 mb-2 bg-dark text-white">
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path='/' element={<News setProgress = {this.setProgress} apikey={this.apikey} key='general' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress = {this.setProgress} apikey={this.apikey} key='business' pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress = {this.setProgress} apikey={this.apikey} key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress = {this.setProgress} apikey={this.apikey} key='health' pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress = {this.setProgress} apikey={this.apikey} key='science' pageSize={this.pageSize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress = {this.setProgress} apikey={this.apikey} key='sports' pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress = {this.setProgress} apikey={this.apikey} key='technology' pageSize={this.pageSize} country='us' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}