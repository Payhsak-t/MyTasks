import '../../index.css';
import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  //   return <div className={`card ${reverse ? ' reverse' : ''}`}>{children}</div>;
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.5)' : '#fff',
        color: reverse ? '#fff' : '#333',
      }}
    >
      {children}
    </div>
  );
}
Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

Card.defaultProps = {
  reverse: false,
};

export default Card;
