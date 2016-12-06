import { SimpleSchema } from "meteor/aldeed:simple-schema";

const MarkerCoordinateSchema = new SimpleSchema({
    lat: {
        type: Number
    },
    lng: {
        type: Number
    }
});

const MarkerPointSchema = new SimpleSchema({
    x: {
        type: Number
    },
    y: {
        type: Number
    }
});

const MarkerIconImageSchema = new SimpleSchema({
    url: {
        type: String
    },
    size: {
        type: MarkerPointSchema,
        optional: true
    },
    origin: {
        type: MarkerPointSchema,
        optional: true
    },
    anchor: {
        type: MarkerPointSchema,
        optional: true
    },
    scaledSize: {
        type: MarkerPointSchema,
        optional: true
    }
});

const MarkerShapeSchema = new SimpleSchema({
    coords: {
        type: [Number],
        optional: true
    },
    type: {
        type: String,
        optional: true
    }
});

export const MarkerSchema = new SimpleSchema({
    _id: {
        type: String,
        max: 48
    },
    defaultAnimation: {
        type: Number,
        optional: true,
        decimal: true,
        defaultValue: 2
    },
    icon: {
        type: MarkerIconImageSchema,
        optional: true
    },
    label: {
        type: String,
        optional: true
    },
    position: {
        type: MarkerCoordinateSchema
    },
    region: {
        type: String
    },
    shape: {
        type: MarkerShapeSchema,
        optional: true
    },
    title: {
        type: String,
        optional: true
    }
});
