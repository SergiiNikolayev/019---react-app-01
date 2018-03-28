import React from 'react';
import ReactDOM from 'react-dom';
//const React = require('react');
const createReactClass = require('create-react-class');


const Note = createReactClass({
	render: function () {
		return (
			<div className="note"> Note </div>
		);
	}
});

const NoteEditor = createReactClass({
	render: function () {
		return (
			<div className="note-editor"> NoteEditor </div>
		);
    }
});

const NotesGrid = createReactClass({
	render: function () {
		return (
			<div className="notes-grid">
				NotesGrid
				<Note />
				<Note />
				<Note />
			</div>
		)
    }
});

const NotesApp = createReactClass({
	render: function () {
		return (
			<div className="notes-app">
				NotesApp
				<NoteEditor/>
				<NotesGrid/>
			</div>
		);
    }
});

ReactDOM.render(
	<NotesApp />,
	document.getElementById('app')
);