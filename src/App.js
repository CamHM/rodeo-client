import Home from './pages/home/Home';
import Project from './pages/project/Project';
import './App.css';

function App() {
  return (
    <div>
      <header className='app__header'>
        <ul>
          <li>
            <a href='#project'>Proyecto</a>
          </li>
        </ul>
      </header>
      <Home />
      <Project />
    </div>
  );
}

export default App;
