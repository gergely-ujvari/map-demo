import { Meteor } from 'meteor/meteor';
import * as React from 'react';
import { render } from 'react-dom';
import { MainApp } from './ui/MainApp';

Meteor.startup(() => {
    render(<MainApp/>, document.getElementById('render-target'))
});
