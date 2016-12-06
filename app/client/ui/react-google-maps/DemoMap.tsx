///<reference path="../../non-ui/spatial.ts"/>
import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from "meteor/react-meteor-data";
import { Session } from "meteor/session";
import { Coordinate, MarkerProps, MapMouseEvent } from "../../non-ui/spatial";
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
    markers: MarkerProps[];
    zoom: number;
}

class _DemoMap extends React.Component<DemoMapProps, DemoMapState> {
    private alphabet:string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    private index:number;

    constructor (props:DemoMapProps) {
        super(props);

        this.state = {
            lat: 47.4979,
            lng: 19.0402,
            zoom: 15,
            markers: [{
                key: 'parlament',
                defaultAnimation: 2,
                label: 'A',
                position: {
                    lat: 47.507172,
                    lng: 19.045677,
                },
                title: 'Nagy a baj'
            }, {
                key: 'opera',
                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                defaultAnimation: 4,
                label: 'B',
                position: {
                    lat: 47.502776,
                    lng: 19.058289,
                }
            }, {
                key: 'war-memorial',
                icon: {
                    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                    size: { x:50, y:50 },
                    origin: { x:0, y:0 },
                    anchor: { x:0, y:32 },
                    scaledSize: { x:50, y:50 }
                },
                defaultAnimation: 2,
                label: 'C',
                position: {
                    lat: 47.504617,
                    lng: 19.050319,
                },
                shape: {
                    coords: [1, 1, 1, 20, 18, 20, 18, 1],
                    type: 'poly'
                }
            }]
        };
        this.index = 2;
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

    private onMapClick (event:MapMouseEvent) {
        this.index++;
        let newMarker:MarkerProps = {
            key: this.alphabet[this.index] + '-' + event.latLng.lat() + '-' + event.latLng.lng(),
            defaultAnimation: 2,
            label: this.alphabet[this.index],
            position: {
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            }
        };

        let markers = this.state.markers.slice();
        markers.push(newMarker);
        this.setState({ markers: markers} as DemoMapState);
    }

    render () {
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
                markers={st.markers}
                zoom={st.zoom}
                onCenterChange={this.onCenterChange.bind(this)}
                onBoundsChange={this.onBoundsChange.bind(this)}
                onMapClick={this.onMapClick.bind(this)}
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
