import * as React from 'react';
import { DemoMap } from "./components/DemoMap";


export const MainApp:React.StatelessComponent<{}> = () => {
    return (
        <div className="MainApp-container">
            <DemoMap/>
        </div>
    );
};
