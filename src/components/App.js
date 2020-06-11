import React from "react";
import WrappedMap from "./Map"
import Header from "./Header"
import NavBar from "./NavBar"
import CommentBoxWrap from "./CommentBoxWrap"

import style from "./style.css"
import RestauranteCard from "./RestauranteCard";
import Toggle from "./Toggle"
import ToggleRest from "./ToggleRest"

import {Container, Col, Row} from "react-bootstrap";


require('dotenv').config()


function App() {
  return (
    <div>
        <NavBar />
        <Header />
        <div>
          <Container fluid>
            <Row>
              <Col lg>
                <Toggle>
                  <div className="tamanhoMapa">
                    <WrappedMap 
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places
                      &key=${process.env.REACT_APP_GOOGLE_KEY}`}
                      loadingElement ={<div style={{ height: "100%"}} />}
                      containerElement= {<div style={{ height: "400px" }} />}
                      mapElement= {<div style={{ height: "100%" }} />}
                      />
                  </div>
                 </Toggle>
              </Col>
              <Col lg>
                <ToggleRest>
                    <RestauranteCard/>
                </ToggleRest>
              </Col>
            </Row>
          </Container>
        </div>
        <CommentBoxWrap/>
    </div>
  );
}

export default App

