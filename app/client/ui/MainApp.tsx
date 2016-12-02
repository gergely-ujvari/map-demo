import * as React from 'react';
import { DemoMap } from "./DemoMap";


export const MainApp:React.StatelessComponent<{}> = () => {
    return (
        <div>
            <DemoMap center={{lat: 47.4979, lng: 19.0402}} zoom={10}/>
        </div>
    );
};
