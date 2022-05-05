import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { ReactElement, useEffect, useRef } from "react";

const render = (status: Status): ReactElement => {
    return <h3>{status} ..</h3>;
  };
  
const style = {height:'100vh'}

function MyMapComponent({center ,zoom} : {center : google.maps.LatLngLiteral,zoom : number}){
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      new window.google.maps.Map(ref.current!, {
        center ,
        zoom ,
      });
    });
  
    return <div ref={ref} style={style} id="map" />;
  }


export default function MapComponent(props :any){
    return(
        <Wrapper apiKey={"AIzaSyBQb9BWP3LVE4eRRmFMC97MsFW1Qze-7j8"} render={render}>
            <MyMapComponent center={props.center}  zoom={props.zoom}/>
        </Wrapper>
    )
}