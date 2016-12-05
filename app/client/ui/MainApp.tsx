import * as React from 'react';
import { DemoMap } from "./google-map-react/DemoMap";


export const MainApp:React.StatelessComponent<{}> = () => {
    return (
        <div className="MainApp-container">
            <DemoMap/>
        </div>
    );
};
