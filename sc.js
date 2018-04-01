        var appId = document.getElementById('app');

        var Note = React.createClass({

            render: function () {
                var colorStyles = { backgroundColor: this.props.color };
                return (
                        <div className="note" style={colorStyles}>
                            <span className="delete-note" onClick={this.props.onDelete}>X</span>
                            <span className="edit-note" onClick={this.props.onEdit}>Edit</span>
                            {this.props.children}
                        </div>
                );
            }
        });



        var NoteEditor = React.createClass({
            getInitialState: function () {
                return{
                    text: '',
                    textDescription: ''
                };
            },

            handleTextChangeMoney: function (event) {
                this.setState({ text: event.target.value });
            },

            handleTextChangeDescription: function (event) {
                this.setState({ textDescription: event.target.value });
            },

            handleNoteAdd: function () {
                /** forming new object with new Note*/
                var newNote = {
                    text: this.state.text,
                    textDescription: this.state.textDescription,
                    category: '',
                    color: '#f5f506a1',
                    //when: date(),
                    id: Date.now()
                };

                this.props.onNoteAdd(newNote);
                //after adding we clear input
                this.setState({text: ''});
                this.setState({textDescription: ''});
            },

            render: function () {
                return (
                        <div className="note-editor">
                            <input type="text" placeholder="How much $" value={this.state.text} className="input-money" onChange={this.handleTextChangeMoney}/>
                            <input type="text" placeholder="Description" value={this.state.textDescription} className="input-description" onChange={this.handleTextChangeDescription}/>
                            <select id="country" name="Category">
                                <option value="spend">Spendings</option>
                                <option value="income">Incomings</option>
                            </select>
                            <button className="add-button" onClick={this.handleNoteAdd}>Add</button>
                        </div>
                );
            }
        });

        var NotesGrid = React.createClass({

            render: function () {
                var onNoteDelete = this.props.onNoteDelete;
                return (
                        <div className="notes-grid" ref="grid">
                            {
                                this.props.notes.map(function(note) {
                                    return (
                                            <Note
                                                    key={note.id}
                                                    onDelete={onNoteDelete.bind(null, note)/*()=>this.onNoteDelete*/}
                                                    color={note.color} > <span className="notes-money">
                                                    {note.text}
                                                {note.when} </span> {note.textDescription}
                                            </Note>
                                        );
                                })
                            }
                        </div>
                );
            }
        });

        var NotesApp = React.createClass({
            getInitialState: function () {
                return {
                    notes: []
                };
            },

            /** in order to for load web page get value that already saved in localStorage, we need in method componentDidMount read value, parse it and write to State
             *  also we need to write data to localStorage, we create for this method _updateLocalStorage*/

            componentDidMount: function () {
                var localNotes = JSON.parse(localStorage.getItem('notes')); //here we read 'notes' from localStorage, patse it, if is something write there -> add to state.
                if (localNotes){
                    this.setState({notes: localNotes});
                }
            },

            componentDidUpdate: function () {
                this._updateLocalStorage();
            },
            
            handleNoteDelete: function (note) {
                var noteId = note.id;
                var newNotes = this.state.notes.filter(function (note) {
                   return note.id !== noteId;
                });
                this.setState({notes: newNotes});
            },

            handleNoteAdd: function (newNote) {
                var newNotes = this.state.notes.slice();
                newNotes.unshift(newNote); //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
                this.setState({ notes: newNotes });
            },
            
            render: function () {
                return (
                        <div className="notes-app">
                            <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                            <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
                        </div>
                );
            },

            _updateLocalStorage: function () {
                var notes = JSON.stringify(this.state.notes); //converting to string everything what is in notes
                localStorage.setItem('notes', notes); //writing to localStorage Item notes
            }
        });

        ReactDOM.render(<NotesApp />, appId);