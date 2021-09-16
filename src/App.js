// Components
import Header from './Components/Header/Header.js'
import SearchBar from './Components/SearchBar/SearchBar.js';
import MainMenu from './Components/MainMenu/MainMenu.js';

// CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MainMenu />
    </div>
  );
}

export default App;
