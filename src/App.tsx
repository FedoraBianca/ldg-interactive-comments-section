import React from 'react';
import './App.css';
import CommentSection from './components/CommentSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <CommentSection />
      </header>
    </div>
  );
}

export default App;
