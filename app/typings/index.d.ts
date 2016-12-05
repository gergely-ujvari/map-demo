/// <reference path="globals/meteor/index.d.ts" />
/// <reference path="globals/react-dom/index.d.ts" />
/// <reference path="globals/react/index.d.ts" />

declare module 'google-map-react' {
    export default var GoogleMap:React.Component<any,any>;
}

declare module 'react-google-maps' {
    let withGoogleMap: Function;
    let GoogleMap: React.Component<any, any>;
    let Marker: React.Component<any, any>;
    let KmlLayer: React.Component<any, any>;

    export {
        withGoogleMap,
        GoogleMap,
        Marker,
        KmlLayer
    }
}

declare module 'meteor/react-meteor-data' {
    import ComponentClass = React.ComponentClass;
    interface IReactMeteorData {
        data: any;
    }
    export let ReactMeteorData: IReactMeteorData;
    // param `component:ComponentClass<P>` causes problem if the componet
    // when the component has `static propTypes`
    function createContainer<P>(propsfn: (props: P) => any, component:any): ComponentClass<P>;
    export { createContainer };
}
