import React from 'react';
import { Col } from 'react-bootstrap';

class About extends React.Component {

  constructor(props){
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Col xs={12}>
        <h2>About TravelTracker</h2>
        <h4>This project was built on the backs of giants.
          We would like to extend a thank to all the
          technologies and artists that made this project possible.
        </h4>
        <Col xs={6}>
        <h5>List of technologies: </h5>
          <ul>
            <li><a href="https://nodejs.org/en/">NodeJS</a></li>
            <li><a href="https://facebook.github.io/react/">React</a></li>
            <li><a href="https://expressjs.com/">Express</a></li>
            <li><a href="https://mobx.js.org/">Mobx</a></li>
            <li><a href="https://webpack.js.org/">Webpack</a></li>
            <li><a href="https://babeljs.io/">Babel</a></li>
            <li><a href="https://github.com/btmills/react-datamaps">React Datamaps</a></li>
            <li><a href="https://github.com/brigade/react-simple-pie-chart">React Simple Piechart</a></li>
          </ul>
        </Col>
        <Col xs={6}>
        <h5>Graphic work from: </h5>
          <ul>
            <li/>
          </ul>
        </Col>
      </Col>
    );
  }
}

About.propTypes = {
};


export default About;
