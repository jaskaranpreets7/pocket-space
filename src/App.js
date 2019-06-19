import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Header />
      <div className="ui raised segment">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
