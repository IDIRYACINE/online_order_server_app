import React from "react";
import { Container } from "react-bootstrap";
import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'

// Fixing the marker icon not showing up
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon


export default function MapComponent(props :any){
    return(
       <Container>
           <MapContainer center={props.center} zoom={props.zoom} scrollWheelZoom={false} style={{ height: "95vh", width: "100%" }}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
       <Marker position={props.center}>
          <Popup>
           A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
       </MapContainer>,
       </Container>
    )
}