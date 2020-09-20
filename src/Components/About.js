import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilePic= "images/"+this.props.data.image;
      var resumeDownload = this.props.data.resumedownload;
      var accounts = this.props.data.social
        .filter( (network) => network.account )
        .map( (network) => {
          return <span>{network.name}: <a href={network.url}>{network.account}</a></span>;
        });
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
              <img className="profile-pic" src={profilePic} alt="Utas" />
          </div>
          <div className="nine columns main-col">
            <h2>私について</h2>

            <p>ゆーたすくんが好きな学生です．数学とか競プロとか開発とか．</p>
            <div className="row">
              <div className="columns contact-details">
                  <h2>アカウント</h2>
                  <p className="address">
                    {accounts}
                  </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
