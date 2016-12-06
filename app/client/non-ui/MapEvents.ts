import LatLng = google.maps.LatLng;
import Point = google.maps.Point;

export interface MapMouseEvent {
    ca: Point;
    latLng: LatLng;
    pixel: Point;
}
