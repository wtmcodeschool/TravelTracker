import React from 'react';
import { inject, observer } from 'mobx-react';
import {  ListGroup, Row, Col, Jumbotron, Well } from 'react-bootstrap';
import Piechart from './Piechart';
import CollectionModal from './CollectionModal';
import styles from './style/DashboardStyle.css.js';
import Trophy from './Trophy';


class Dashboard extends React.Component {

  constructor(){
    super();
    this.state = {
      activityList: []
    };
  }

  componentWillMount() {
    this.setState({
      activityList: this.props.userStore.getActivityList()
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activityList: nextProps.userStore.getActivityList()
    });
  }

  createTrophyCase(){
    if(this.props.userStore.loggedInUser){
      let displayTrophy = [
        <Trophy key="states" collectionName={"states"}/>,
        <Trophy key="parks" collectionName={"parks"}/>,
        <Trophy key="elevations" collectionName={"elevations"}/>,
        <Trophy key="mlbstadiums" collectionName={"mlbstadiums"}/>,
        <Trophy key="nflstadiums" collectionName={"nflstadiums"}/>,
        <Trophy key="airports" collectionName={"airports"}/>,];
      return displayTrophy;
    }
  }

  render() {

    if(this.props.userStore.checkForCollections()){
      return (
        <div>
          <div>
            <Col md={1}/>
            <Col md={2} style={{textAlign: "center"}}>
              <Well style={styles.wellStyle}>
                <Row>
                  <Piechart collectionname={"states"}/>
                  <Piechart collectionname={"parks"}/>
                  <Piechart collectionname={"mlbstadiums"}/>
                  <Piechart collectionname={"nflstadiums"}/>
                  <Piechart collectionname={"elevations"}/>
                  <Piechart collectionname={"airports"}/>
                </Row>
              </Well>
            </Col>
            <Col md={6}>
              <Well style={styles.wellStyle}>
                  {this.createTrophyCase()}
              </Well>
              <Well style={styles.wellStyle}>
                <div style={styles.trophyCase}>
                  <CollectionModal/>
                </div>
              </Well>
            </Col>
            <Col md={2}>
              <Well style={styles.listStyle}>
              <h4 style={{textAlign: "center"}}>Recent Activity</h4>
              <ListGroup>
                {this.state.activityList}
              </ListGroup>
              </Well>
            </Col>
            <Col md={1}/>
          </div>
        </div>
      );
    } else {

      const bg = require('../img/highway.jpg');
      const parentStyle = {height:"80vh", width:"100vw", background: "url("+bg+") no-repeat center fixed",
        backgroundSize: "cover", display: "flex", alignItems: "center", justifyContent: "center"};

      return (
        <div style={parentStyle}>
          <div style={{textAlign: "center", alignItems: "center", justifyContent: "center"}}>
            <Well style={{border: ".5px solid #57ae81"}}>
            <h4>Welcome to Travel Tracker!  Thank you for stopping by.</h4>
            <h4 style={{color: "57ae81", fontWeight: "bold", opacity: "1"}}>View the assortment of options available in the "Collections"
            menu and pick your passion.</h4>
            <h4 style={{color: "57ae81", fontWeight: "bold", opacity: "1"}}>Periodically check in on the Home Page to view
            your overall progress.</h4>
            </Well>
            <img style={styles.welcomeRibbon} src={require('../img/barlogo.png')}/>
            <Well style={{border: ".5px solid #57ae81"}}>
            <h3><strong>Bon Voyage!
            Safe Travels!  Fair Winds and Following Seas!  Play Ball!</strong></h3>
            </Well>
          </div>
        </div>
      );
    }
  }
}

Dashboard.propTypes = {
  userStore: React.PropTypes.object
};

export default inject("userStore")(observer(Dashboard));
