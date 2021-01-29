import Header from './components/header/Header';
import Home from './pages/home/Home';
import Project from './pages/project/Project';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
