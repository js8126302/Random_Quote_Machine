
import './App.css';

import NewFetching from './NewFetching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Header"> Random Quotes Machine</h1>
      </header>
      <main id="main">
      <div id="component">
      <NewFetching />  
      </div>
      </main>
    </div>
  );
}

export default App;
