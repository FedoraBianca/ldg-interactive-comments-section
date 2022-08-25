import React from 'react';
import './App.css';
import CommentSection from './components/CommentSection';

const App: React.FC = () => {
  return (
    <div className="app d-flex flex-row justify-content-center pt-5">
        <CommentSection />
    </div>
  );
}

export default App;
