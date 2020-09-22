import React, { Component } from 'react';
import './App.css';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Motto from './Components/Motto';
import Footer from './Components/Footer';
import resumeData from './resumeData.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  componentDidMount() {
    this.setState({resumeData});
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Motto data={this.state.resumeData.mottos}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
  /*
    <Contact data={this.state.resumeData.main}/>
  */
}

export default App;
