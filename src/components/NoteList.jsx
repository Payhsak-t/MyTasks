import NoteTaker from './NoteTaker';
import PropTypes from 'prop-types';

function NoteList({ tasks, deleteNote }) {
  if (!tasks || tasks.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className="feedback-list">
      {tasks.map((item) => (
        <NoteTaker key={item.id} item={item} deleteNote={deleteNote} />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.number.isRequired,
    })
  ),
};

export default NoteList;
