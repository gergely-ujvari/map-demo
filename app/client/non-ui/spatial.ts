
export interface Coordinate {
    lat: number;
    lng: number;
}

export interface MarkerProps {
    defaultAnimation?: number;
    icon?: string;
    key?: string;
    label?: string;
    position: Coordinate;
    title?: string; // Tooltip
}
