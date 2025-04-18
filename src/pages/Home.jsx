import React from "react";
import styles from "./Home.module.css";
import { StatsTables, QuickInfo, GeoBoard } from "../components";
import { Container, Row, Col } from "react-bootstrap";
import { fetchQuickInfo, fetchData } from "../api";

class Home extends React.Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = {
      geoclick: "countries",
      continentSelected: "countries",
      dataQuickInfo: "",
      tableData: ""
    };
  }

  async componentDidMount() {
    const fetchedData = await fetchQuickInfo();
    this.setState({ dataQuickInfo: fetchedData });
    const fetchedTableData = await fetchData(this.geoclick);
    this.setState({ tableData: fetchedTableData });
  }

  detecterGeoClick = (value, continent = value) => {
    this.setState({
      geoclick: value,
      continentSelected: continent
    });
  };

  render() {
    return (
      <div className={styles.root}>
        <Container fluid>
          <Row className="justify-content-xl-between">
            <Col lg="4" xl="2">
              <QuickInfo dataQuickInfo={this.state.dataQuickInfo} />
            </Col>

            <Col lg="8" xl={{ span: 9, offset: 1 }}>
              <Row>
                <GeoBoard detecterGeoClick={this.detecterGeoClick} />
              </Row>
              <Row>
                <StatsTables
                  geography={this.state.geoclick}
                  continentSelected={this.state.continentSelected}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
