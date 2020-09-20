import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import resumeData from './resumeData.json';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

  }

  componentDidMount(){
    this.setState({resumeData});
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
  /*
    <About data={this.state.resumeData.main}/>
    <Resume data={this.state.resumeData.resume}/>
    <Portfolio data={this.state.resumeData.portfolio}/>
    <Testimonials data={this.state.resumeData.testimonials}/>
    <Contact data={this.state.resumeData.main}/>
    <Footer data={this.state.resumeData.main}/>
  */
}

export default App;
