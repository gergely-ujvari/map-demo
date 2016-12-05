import * as React from 'react';
import { MapComponent } from "./MapComponent";
import { Coordinate } from "../../non-ui/spatial";

interface DemoMapProps {

}

interface DemoMapState {
    lat: number;
    lng: number;
    zoom: number;
}

export class DemoMap extends React.Component<DemoMapProps, DemoMapState> {
    constructor (props:DemoMapProps) {
        super(props);

        this.state = {
            lat: 47.4979,
            lng: 19.0402,
            zoom: 10
        };
    }

    private onCenterChange (lat: number, lng: number) {
        this.setState({
            lat, lng
        } as DemoMapState);
    }

    private onBoundsChange (center: Coordinate, zoom: number, bounds: number[], marginBounds: number[]) {
        this.setState({
            lat: center.lat, lng: center.lng, zoom: zoom
        } as DemoMapState);
    }

    render () {
        const st = this.state;

        return (
            <MapComponent
                center={{lat: st.lat, lng: st.lng}}
                zoom={st.zoom}
                onCenterChange={this.onCenterChange.bind(this)}
                onBoundsChange={this.onBoundsChange.bind(this)}
            />
        );
    }
}
