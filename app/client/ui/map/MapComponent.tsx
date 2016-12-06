import * as React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import { Coordinate, MarkerData, IconImage } from "../../../common/data/MarkerData";

interface MapComponentProps {
    center: Coordinate;
    zoom: number;
    markers: MarkerData[];
    onMapClick: Function;
    onMapLoad: Function;
    onCenterChanged: (center: Coordinate) => void;
    onBoundsChanged: (center: Coordinate, zoom: number, bounds: number[], marginBounds: number[]) => void;
    containerElement: JSX.Element;
    mapElement: JSX.Element;
}

export const MapComponent = withGoogleMap((props:MapComponentProps) => {
    const renderMarkers = () => {
        return props.markers.map((marker:MarkerData, index:number) => {
            let cloned:any = Object.assign({}, marker);
            if (marker.icon && marker.icon.size) {
                // Transform marker.icon properties to proper google classes
                let icon:IconImage = marker.icon;
                if (icon.size) {
                    cloned.icon.size = new (window as any).google.maps.Size(icon.size.x, icon.size.y);
                }
                if (icon.origin) {
                    cloned.icon.origin = new (window as any).google.maps.Point(icon.origin.x, icon.origin.y);

                }
                if (icon.anchor) {
                    cloned.icon.origin = new (window as any).google.maps.Point(icon.origin.x, icon.origin.y);

                }
                if (icon.scaledSize) {
                    cloned.icon.scaledSize = new (window as any).google.maps.Size(icon.scaledSize.x, icon.scaledSize.y);
                }
            } else {
                if (marker.icon)  {
                    cloned.icon = marker.icon.url;
                }
            }

            if (!cloned.key) {
                cloned.key = cloned._id;
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
                   onBoundsChanged={props.onBoundsChanged}
                   onCenterChanged={props.onCenterChanged}
                   onClick={props.onMapClick}
        >
            {renderMarkers()}
        </GoogleMap>
    );
});
