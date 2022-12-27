import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { Router } from '@reach/router';
import List from './views/List';
import AddPlayer from './views/AddPlayer';
import Status from './views/Status';
import Main from './views/Main';



function App() {
  return (
    <div className="App">
    
      <Router>
        <Main path="/"/>
        <List path="/show"/>
        

      </Router>
    </div>
  );
}

export default App;
