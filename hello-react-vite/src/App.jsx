import './App.css';
import ironhackLogo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png'
import Features from './components/Features';
function App() {
  return (
    <div className="App">
      <div className='upper'>
        <nav className='navbar'>
          <img className='logo' src={ironhackLogo} alt="logo" />
          <img className='menu' src={menu} alt="menu" />
        </nav>

        <h1>Say Hello to ReactJS</h1>
        <p>You will learn how to use the most popular frontend library and become a super Ninja developper</p>
        <button>Awsome!</button>
      </div>
      <Features />
    </div>


  );
}

export default App;