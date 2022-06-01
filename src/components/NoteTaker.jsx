import { useState } from 'react';

function NoteTaker() {
  const [priority, setPriority] = useState(7);
  const [task, setTask] = useState('This is an example task');

  return (
    <div className="card">
      <div className="num-display">{priority}</div>
      <div className="text-display">{task}</div>
    </div>
  );
}

export default NoteTaker;
