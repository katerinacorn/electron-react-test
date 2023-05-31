import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

const Hello = () => {
  const [commentData, setCommentData] = useState({
    name: '',
    title: '',
    text: '',
  });
  const onClick = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', [1024, 200]);
    // window.electron.ipcRenderer.invoke('ipc-example', ['ololo']);
  };

  const handleCreateComment = () => {
    window.electron.ipcRenderer.sendMessage('ipc-example', [
      'create-comment',
      commentData,
    ]);
    console.log('commentData: ', commentData);
  };

  window.electron.ipcRenderer.on('ipc-example', (event, message) => {
    console.log(event);
  });

  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
        <button type="button" id="resizeBtn" onClick={onClick}>
          resize
        </button>
        <form>
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setCommentData({ ...commentData, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="title"
            onChange={(e) =>
              setCommentData({ ...commentData, title: e.target.value })
            }
          />
          <textarea
            placeholder="comment"
            onChange={(e) =>
              setCommentData({ ...commentData, text: e.target.value })
            }
          />
          <button type="button" onClick={handleCreateComment}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
