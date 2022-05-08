import React from "react";
import { Container } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
// Fixing the marker icon not showing up
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;
export default function MapComponent(props) {
    return (React.createElement(Container, null,
        React.createElement(MapContainer, { center: props.center, zoom: props.zoom, scrollWheelZoom: false, style: { height: "95vh", width: "100%" } },
            React.createElement(TileLayer, { attribution: '\u00A9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }),
            React.createElement(Marker, { position: props.center },
                React.createElement(Popup, null,
                    "A pretty CSS3 popup. ",
                    React.createElement("br", null),
                    " Easily customizable."))),
        ","));
}
//# sourceMappingURL=Map.js.map