import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text-box">
        <h1>Responsive Paragraph Word Counter</h1>
          <textarea
            placeholder="Write your text here..."
            rows="8"
            onChange={handleTextChange}
            value={text}
          />
          <div className="word-count">Word Count: {wordCount}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
