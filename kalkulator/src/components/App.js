import React, { Component } from 'react'
import Screen from '../containers/Screen'
import ButtonList from '../containers/ButtonList'
import History from '../containers/History'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h3 className='mt-4'><i className='fa fa=calculator' /> Aplikasi Kalkulator Redux </h3>
        </div>
        <div className="screen">
          <Screen />
        </div>
        <div className="col-sm-8">
          <ButtonList />
        </div>
        <div className="col-sm-4">
          <History />
        </div>
      </div>
    );
  }
}

export default App;
