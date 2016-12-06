
export interface Coordinate {
    lat: number;
    lng: number;
}

export interface MarkerPoint {
    x: number;
    y: number;
}

export interface MarkerShape {
    coords?: number[];
    type?: string;
}

export interface IconImage {
    url: string;
    size?: MarkerPoint;
    origin?: MarkerPoint;
    anchor?: MarkerPoint;
    scaledSize?: MarkerPoint;
}

export interface MarkerData {
    _id: string;
    defaultAnimation?: number;
    icon?: IconImage;
    key?: string;
    label?: string;
    position: Coordinate;
    region: string;
    shape?: MarkerShape;
    title?: string; // Tooltip
}
