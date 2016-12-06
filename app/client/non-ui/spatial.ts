import MarkerShape = google.maps.MarkerShape;
import LatLng = google.maps.LatLng;
import Point = google.maps.Point;

export interface Coordinate {
    lat: number;
    lng: number;
}

export interface MarkerPoint {
    x: number;
    y: number;
}

export interface IconImage {
    url: string;
    size: MarkerPoint;
    origin: MarkerPoint;
    anchor: MarkerPoint;
    scaledSize?: MarkerPoint;
}

export interface MarkerProps {
    defaultAnimation?: number;
    icon?: string | IconImage;
    key?: string;
    label?: string;
    position: Coordinate;
    shape?: MarkerShape;
    title?: string; // Tooltip
}


export interface MapMouseEvent {
    ca: Point;
    latLng: LatLng;
    pixel: Point;
}