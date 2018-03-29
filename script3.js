var Note = React.createClass({
	render: function () {
		return (
			<div className="note"> {this.props.children} </div>
		);
	}
});

var NoteEditor = React.createClass({
	render: function () {
		return (
			<div className="note-editor"> NoteEditor </div>
		);
    }
});

var NotesGrid = React.createClass({
	render: function () {
		return (
			<div className="notes-grid">
				{
					this.props.notes.map(function (note) {
						return <Note key={note.id} color={note.color} > {note.text} </Note>;
					})
				}
			</div>
		)
    }
});

var NotesApp = React.createClass({
   getInitialState: function() {
       return {
           notes: [{ //here stores array of notes
               id: 0,
               text: "qwerty",
               color: "#ffd700"
           }, {
               id: 1,
               text: "asdfgh",
               color: "#20b2aa"
           }, {
               id: 2,
               text: "zxcvbnm",
               color: "#90ee90"
           }] //here stores array of notes
       };
   },
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