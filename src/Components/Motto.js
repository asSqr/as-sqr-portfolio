import React, { Component } from 'react';

class Motto extends Component {
  render() {

    if(this.props.data){
      var mottos = this.props.data.mottos.map( (mottos, idx) => {
        return <li key={"motto-"+idx}>
            <blockquote>
               <p>{mottos.text}</p>
               <cite>{mottos.author}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="mottos">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
                <h1><span>座右の銘的な</span></h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">
                {mottos}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Motto;
