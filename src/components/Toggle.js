import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";

export default class toggle extends Component {
    state = {
        on: false,
    }

    onChange = () => {
        this.setState({ height: '400px'  })
    }

    unChange = () => {
        if(this.state.on === false){
            this.setState({ height: 'auto'  })
        }
        else {this.setState({ height: '400px'  })}
    }


    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render(){
        return(
            <div>
                <div id="Mapa"></div>
                <Col>
                <a href="#Mapa" onClick={this.onChange}>
                <Row  className="toggleButton" onClick={this.toggle} onMouseLeave={this.unChange}>
                    <div className="botaoEscolha">
                        <div>
                            <img src={require('./imagens/Mapa.PNG')} alt="..."/>
                        </div>
                    </div>
                </Row>
                </a>
                <div className="toggleResultado"
                    style={{ height: this.state.height }}  
                >
                    {this.state.on && this.props.children}
                </div>
                </Col>
            </div>
        )
    }
}
