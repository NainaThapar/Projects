import React from 'react';
import 'antd/dist/antd.css';

import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Main></Main>
      </header>
    </div>
  );
}

export default App;
