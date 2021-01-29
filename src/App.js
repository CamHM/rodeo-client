import Home from './pages/home/Home';
import Project from './pages/project/Project';
import Header from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Project />
    </div>
  );
}

export default App;
