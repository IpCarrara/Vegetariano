import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as locais from "./Restaurantes.json";
import { useState } from "react";


const Map = () =>{
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    return (
        <GoogleMap 
          defaultZoom={13}
          defaultCenter={{ lat: -19.921180, lng: -43.948075 }}
        >
          {locais.Restaurantes.map((restVegetariano)=> (
            <Marker 
              key={restVegetariano.REST_ID}
              position={{
                lat: restVegetariano.LOCATION_LAT_LNG[0],
                lng: restVegetariano.LOCATION_LAT_LNG[1]
              }}

              onClick={() => {
                setSelectedRestaurant(restVegetariano);
              }}

              icon={{
                url:"./MarkerIcon.png",
                scaledSize: new window.google.maps.Size(30, 55)
              }}
            >
          
              {selectedRestaurant && selectedRestaurant.REST_ID === restVegetariano.REST_ID && (
                <InfoWindow
                  onCloseClick={()=> {
                    setSelectedRestaurant(null);
                  }}
                >
                  <div className="infoTamanho">
                  <img className="InfoBoxLogo" src={require(`${selectedRestaurant.LOGO_REST}`)} width={78} height={78} mode='fit'  alt="..."></img>
                    <p className="textBold">{selectedRestaurant.NAME}</p>
                    <p className="fundoCinza">{selectedRestaurant.ADDRESS}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
    );
  }
  
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  export default WrappedMap
