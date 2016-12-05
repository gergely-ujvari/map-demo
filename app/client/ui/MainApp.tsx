import * as React from 'react';
import { DemoMap } from "./react-google-maps/DemoMap";


export const MainApp:React.StatelessComponent<{}> = () => {
    return (
        <div className="MainApp-container">
            <DemoMap/>
        </div>
    );
};
