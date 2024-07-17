import React from 'react';
import ETAForm from './ETAForm';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ETA Calculator</h1>
        <ETAForm />
      </header>
    </div>
  );
};

export default App;
