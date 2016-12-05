import * as React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Coordinate, MarkerProps, IconImage } from "../../non-ui/spatial";

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
            let cloned:any;
            if (marker.icon && (marker.icon as IconImage).url) {
                let icon:IconImage = (marker.icon as IconImage);
                cloned = Object.assign({}, marker);
                cloned.icon.size = new (window as any).google.maps.Size(icon.size.x, icon.size.y);
                cloned.icon.origin = new (window as any).google.maps.Point(icon.origin.x, icon.origin.y);
                cloned.icon.anchor = new (window as any).google.maps.Point(icon.anchor.x, icon.anchor.y);

                if (icon.scaledSize) {
                    cloned.icon.scaledSize = new (window as any).google.maps.Size(icon.scaledSize.x, icon.scaledSize.y);
                }
            } else {
                cloned = marker
            }
            return (
                 <Marker
                     {... cloned}
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
