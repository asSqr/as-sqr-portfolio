import React, { Component } from 'react';

class About extends Component {
  render() {

    if( this.props.data ) {
      var profilePic = process.env.PUBLIC_URL+"/images/"+this.props.data.image;
      var accounts = this.props.data.social
        .filter( (network) => network.account )
        .map( (network) => {
          return <span dangerouslySetInnerHTML={{__html: network.name+": "+(network.url ? "<a href="+network.url+">" : "")+network.account+(network.url ? "</a>" : "")+"<br/>"}}></span>;
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

            <p>
              ゆーたすくんが好きな学生です．数学とか競プロとか開発とか．<br/>
              何かあれば以下のどれかに連絡ください．
            </p>
            <h2>アカウント</h2>
            <p className="address">
              {accounts}
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
