import { useState } from 'react';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteDetails from './components/NoteDetails';

function App() {
  const [tasks, setTasks] = useState(NoteDetails);
  const deleteNoteHandler = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setTasks((prevTask) => prevTask.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className="container">
        <NoteList tasks={tasks} deleteNote={deleteNoteHandler} />
      </div>
    </>
  );
}

export default App;
