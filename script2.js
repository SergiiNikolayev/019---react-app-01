/*const React = require('react');
const createReactClass = require('create-react-class');*/

import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

const appId = document.getElementById('app');

class Note extends React.Component {
    render() {
        return (
            <div className="note"> Note </div>
    );
    }
};

class NoteEditor extends React.Component {
    render() {
        return (
            <div className="note-editor"> NoteEditor </div>
    );
    }
};

class NotesGrid extends React.Component {
    render() {
        return (
            <div className="notes-grid">
            NotesGrid
            <Note />
            <Note />
            <Note />
            </div>
    )
    }
};

class NotesApp extends React.Component {
    render() {
        return (
            <div className="notes-app">
            NotesApp
            <NoteEditor/>
            <NotesGrid/>
            </div>
    );
    }
};

ReactDOM.render(
<NotesApp />,
    appId
);
