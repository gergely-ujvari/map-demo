/// <reference path="globals/meteor/index.d.ts" />
/// <reference path="globals/react-dom/index.d.ts" />
/// <reference path="globals/react/index.d.ts" />
/// <reference path="../node_modules/@types/googlemaps/index.d.ts" />
/// <reference path="../node_modules/@types/meteor/index.d.ts" />
/// <reference path="../node_modules/@types/react-redux/index.d.ts" />

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

declare module SimpleSchemaModule {
    interface SimpleSchemaDefinition {
        [attribute: string]: {[props: string]: any}
    }
    export interface SimpleSchema {
        new(definition: SimpleSchemaDefinition): SimpleSchema;
        extendOptions(options: {[options: string]: any}): void;
        validate(object:any):void;
        clean(object:any):void;
    }

}

declare module 'meteor/aldeed:simple-schema' {
    export var SimpleSchema:{
        new(definition: SimpleSchemaModule.SimpleSchemaDefinition):SimpleSchemaModule.SimpleSchema;
        RegEx: {
            Url: RegExp,
            Email: RegExp
        },
        messages(messages:{[key:string]:string}):void;
    };
}

// this declares new methods and attributes to the mongo database
declare module "meteor/mongo" {
    export module Mongo {
        export interface Collection<T> {
            attachSchema(schema:SimpleSchemaModule.SimpleSchema):any;
            'do': any;
        }
    }
}
