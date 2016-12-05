import * as React from 'react';

import GoogleMap from 'google-map-react';
import { Coordinate } from "../non-ui/spatial";
import { MapPlaceText } from "./components/MapPlaceText";

const apiKey = 'AIzaSyClgJQPRWyz2mefIdo-STFuK3twHnchQfE';

interface DemoMapProps {
    center: Coordinate;
    zoom: number;
}

export const DemoMap:React.StatelessComponent<DemoMapProps> = (props:DemoMapProps) => {
    return (
        <div className="DemoMap-container">
            <GoogleMap
                bootstrapURLKeys={{language: 'hu', key: apiKey}}
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
                <MapPlaceText lat={47.507172} lng={19.045677} text="Nagy baj!"/>
            </GoogleMap>
        </div>
    );
};
