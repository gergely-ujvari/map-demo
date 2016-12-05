
export interface Coordinate {
    lat: number;
    lng: number;
}

export interface MarkerProps {
    position: Coordinate;
    key?: string;
    defaultAnimation?: number;
    title?: string; // Tooltip
}
