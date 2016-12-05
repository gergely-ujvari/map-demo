///<reference path="../../non-ui/spatial.ts"/>
import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from "meteor/react-meteor-data";
import { Session } from "meteor/session";
import { Coordinate, MarkerProps } from "../../non-ui/spatial";
import { MapComponent } from "./MapComponent";

// ToDo: move this to a separate file
const apiKey = 'AIzaSyClgJQPRWyz2mefIdo-STFuK3twHnchQfE';

(window as any).googleMapsLoaded = function () {
    Session.set('demomap.loadedJS', true);
};

function loadGoogleMapsJS () {
    let script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=googleMapsLoaded";
    document.head.appendChild(script);
}

Meteor.startup(() => {
    loadGoogleMapsJS();
    Session.set('demomap.loadedJS', false);
});
// Until this block

interface DemoMapProps {
    scriptLoaded?: boolean;
}

interface DemoMapState {
    lat: number;
    lng: number;
    zoom: number;
}

class _DemoMap extends React.Component<DemoMapProps, DemoMapState> {
    private markers:MarkerProps[];

    constructor (props:DemoMapProps) {
        super(props);

        this.state = {
            lat: 47.4979,
            lng: 19.0402,
            zoom: 10,
        };

        this.markers = [{
            position: {
                lat: 47.507172,
                lng: 19.045677,
            },
            key: 'parlament',
            defaultAnimation: 2
        }];
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

    private onMapLoad () {

    }

    render () {
        console.log(this.props);
        if (!this.props.scriptLoaded) {
            return (
                <h1>
                    Loading Google Maps...
                </h1>
            )
        }

        const st = this.state;

        return (
            <MapComponent
                center={{lat: st.lat, lng: st.lng}}
                markers={this.markers}
                zoom={st.zoom}
                onCenterChange={this.onCenterChange.bind(this)}
                onBoundsChange={this.onBoundsChange.bind(this)}
                onMaplLoad={this.onMapLoad.bind(this)}
                containerElement={
                    <div style={{ height: `100%` }} />
                    }
                mapElement={
                     <div style={{ height: `100%` }} />
                    }
            />
        );
    }
}

export const DemoMap = createContainer<DemoMapProps>(() => {
    return {
        scriptLoaded: Session.get('demomap.loadedJS')
    }
}, _DemoMap);
