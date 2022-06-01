import Card from './UI/Card';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';

function NoteTaker({ item, deleteNote }) {
  return (
    <Card reverse={false}>
      <div className="num-display">{item.priority}</div>
      <button onClick={() => deleteNote(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

NoteTaker.propTypes = {
  item: PropTypes.object.isRequired,
};

export default NoteTaker;
