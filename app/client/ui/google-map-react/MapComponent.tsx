import * as React from 'react';

import GoogleMap from 'google-map-react';
import { Coordinate } from "../../../common/data/MarkerData";
import { MapPlaceText, MapPlaceTextProps } from "./MapPlaceText";

const apiKey = 'AIzaSyClgJQPRWyz2mefIdo-STFuK3twHnchQfE';

interface MapComponentProps {
    center: Coordinate;
    zoom: number;
    onCenterChange: (lat: number, lng: number) => void;
    onBoundsChange: (center: Coordinate, zoom: number, bounds: number[], marginBounds: number[]) => void;
}

export const MapComponent:React.StatelessComponent<MapComponentProps> = (props:MapComponentProps) => {
    const onChildClick = (key:string, childProps: MapPlaceTextProps) => {
        props.onCenterChange(childProps.lat, childProps.lng);
    };

    return (
        <div className="MapComponent-container">
            <GoogleMap
                bootstrapURLKeys={{language: 'hu', key: apiKey}}
                center={props.center}
                zoom={props.zoom}
                onChildClick={onChildClick}
                onBoundsChange={props.onBoundsChange}
            >
                <MapPlaceText lat={47.507172} lng={19.045677} text="Nagy baj!"/>
            </GoogleMap>
        </div>
    );
};
