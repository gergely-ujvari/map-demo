import * as React from 'react';
import { DemoMap } from "./map/DemoMap";


export const MainApp:React.StatelessComponent<{}> = () => {
    return (
        <div className="MainApp-container">
            <DemoMap/>
        </div>
    );
};
