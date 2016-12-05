import * as React from 'react';

export interface MapPlaceTextProps {
    lat: number; // Will be handled by GoogleMap Component
    lng: number; // Will be handled by GoogleMap Component
    text: string;
}

export const MapPlaceText:React.StatelessComponent<MapPlaceTextProps> = (props:MapPlaceTextProps) => {
    return (
        <div className="MapPlaceText-container">
            {props.text}
        </div>
    );
};

MapPlaceText.propTypes = {
    lat: React.PropTypes.number,
    lng: React.PropTypes.number,
    text: React.PropTypes.string.isRequired
};
