import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";


export default class toggleRest extends Component {

    state = {
        on: false,
    }

    unChange = () => {
        if(this.state.on === false){
            this.setState({ height: 'auto'  })
        }
        else {this.setState({ height: '400px'  })}
    }

    toggle = () => {
        this.setState({
            on: !this.state.on,
        })
    }

    render(){
        return(
            <div>
                <div id="Restaurantes"></div>
                <Col>
                    <a  href="#Restaurantes">
                        <Row className="toggleButton" onClick={this.toggle} onMouseLeave={this.unChange}>
                            <div className="botaoEscolha">
                                <img src={require('./imagens/Restaurante.PNG')} alt="..."/>
                            </div>
                        </Row>
                    </a>
                    <Row>
                        <div className="toggleResultadoRest"
                        style={{ height: this.state.height }} 
                        >    
                            {this.state.on && this.props.children}
                        </div>
                    </Row>
                </Col>
            </div>
        )
    }
}
