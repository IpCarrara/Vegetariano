import React from "react"
import { Jumbotron } from "react-bootstrap";

let Headers = () =>{
    return (
        <div>
            <Jumbotron>
                    <div id="inicio"></div>
                    <div className="jumbotronConteiner"></div>
                    <div id="textoJumbotron">
                        <div className="tarjaPreta"></div>
                        <h1 className="tituloJumbotron">Vegetariano</h1>
                        <p className="lead subJumbText">Restaurantes em Belo Horizonte</p>
                    </div>
                    <br/>
            </Jumbotron>
            <h3 className="tituloConteudo lead">Escolha seu restaurante por local ou nome</h3>
        </div>
    )
}

export default Headers