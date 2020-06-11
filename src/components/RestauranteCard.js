import React from "react";
import * as locais from "./Restaurantes.json";
import { Col } from "react-bootstrap";



let RestauranteCard = () => {
    let cards = locais.Restaurantes.map((props)=> {
        return (
            <div>
                <div className="cardContainers">
                    <Col>
                        <div className="cardBox">
                            <img className="fotoLogo" src={require(`${props.LOGO_REST}`)} width={90} height={90} mode='fit' alt="..."></img>
                            <p className="cardTitulo">{props.NAME}</p>
                            <p className="cardAddress">{props.ADDRESS}</p>
                        </div>
                    </Col>
                </div>
            </div>
        )
    })
    return (
        <div>
            {cards}
        </div>
    )
}

export default RestauranteCard 