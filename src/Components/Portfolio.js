import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map( (projects) => {
        var projectImage = process.env.PUBLIC_URL+'/images/portfolio/'+projects.image;

        return projects.url.length ? (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              
                <div className="link-icon"><i className="fa fa-link"></i></div>
              </a>
            </div>
          </div>
        ) : (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
                
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
            
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </div>
          </div>
        )
      })

      var blogs = this.props.data.blogs.map( (blogs) => {
        return (
          <div className="row item">
            <div className="twelve columns">
              <div key={blogs.title}><h3><a href={blogs.url}>{blogs.title}</a></h3>
                <p className="info">{blogs.description}<span>&bull;</span><em className="date">{blogs.date}</em></p>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>つくったもの</h1>

            <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {projects}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>かいたもの</h1>

            {blogs}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
