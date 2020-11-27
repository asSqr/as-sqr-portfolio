import React, { Component } from 'react';

class Resume extends Component {
  render() {
    
    if( this.props.data ) {
      var skills = this.props.data.skills.map((skills, idx) => {
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={"skill-"+idx}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>学歴</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="東京大学工学部"><h3>東京大学工学部</h3>
                  <p className="info">学士号取得 <span>&bull;</span><em className="date">~2020/03</em></p>
                </div>
                <div key="東京大学大学院情報理工学系研究科"><h3>東京大学大学院情報理工学系研究科</h3>
                  <p className="info">修士課程在学中 <span>&bull;</span><em className="date">2020/04~</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>職歴</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="iSTC"><h3>i Smart Technologies</h3>
                  <p className="info">バイト / インターン <span>&bull;</span><em className="date">2018/06~</em></p>
                </div>
                <div key="KaiY"><h3>KaiY</h3>
                  <p className="info">インターン <span>&bull;</span><em className="date">2020/08</em></p>
                </div>
                <div key="Yahoo"><h3>Yahoo! JAPAN</h3>
                  <p className="info">インターン <span>&bull;</span><em className="date">2020/09</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>受賞歴</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div key="JOI2013"><h3>情報オリンピック 2013-2014 本選出場</h3>
                  <p className="info"><a href="https://www.ioi-jp.org/joi/2013/2014-yo-A-rank.html">リンク</a></p>
                </div>
                <div key="JOI2014"><h3>情報オリンピック 2014-2015 本選出場</h3>
                  <p className="info"><a href="https://www.ioi-jp.org/joi/2014/2015-yo-A-rank.html">リンク</a></p>
                </div>
                <div key="U22"><h3>U22 プログラミングコンテスト サイボウズ企業賞受賞</h3>
                  <p className="info"><a href="https://u22procon.com/2014/kojin.php">リンク</a></p>
                </div>
                <div key="JPHACKS"><h3>JPHACKS 2020 Finalist Award (F_2006 Flash Reading)</h3>
                  <p className="info"><a href="https://jphacks.com/information/award-finalists2020/">リンク</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
              <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <p>スキル ※100% の絶対量は不明です</p>

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
