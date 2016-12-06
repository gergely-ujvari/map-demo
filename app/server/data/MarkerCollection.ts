import { Mongo } from "meteor/mongo";
import { MarkerSchema } from "../../common/data/MarkerSchema";
import { MarkerData } from "../../common/data/MarkerData";

export const Markers = new Mongo.Collection<MarkerData>('markers');
Markers.attachSchema(MarkerSchema);
