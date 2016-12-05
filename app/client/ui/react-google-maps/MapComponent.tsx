import * as React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Coordinate, MarkerProps } from "../../non-ui/spatial";

interface MapComponentProps {
    center: Coordinate;
    zoom: number;
    markers: MarkerProps[];
    onMapLoad: Function;
    onCenterChange: (center: Coordinate) => void;
    onBoundsChange: (center: Coordinate, zoom: number, bounds: number[], marginBounds: number[]) => void;
    containerElement: JSX.Element;
    mapElement: JSX.Element;
}

export const MapComponent = withGoogleMap((props:MapComponentProps) => {
    const renderMarkers = () => {
        return props.markers.map((marker:MarkerProps, index:number) => {
            return (
                 <Marker
                     {... marker}
                 />
            )
        });
    };

    return (
        <GoogleMap center={props.center}
                   ref={props.onMapLoad}
                   zoom={props.zoom}
                   onBoundsChange={props.onBoundsChange}
                   onCenterChange={props.onCenterChange}
        >
            {renderMarkers()}
        </GoogleMap>
    );
});
