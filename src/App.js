// Components
import { React, useState } from 'react';
import Header from './Components/Header/Header.js'
import SearchBar from './Components/SearchBar/SearchBar.js';
import MainMenu from './Components/MainMenu/MainMenu.js';

// CSS
import './App.css';

function App() {
  const [data, setData] = useState(false);

  return (
    <div className="App">
      <Header />
      <SearchBar setData={setData} data={data} />
      <MainMenu setData={setData} data={data} />
    </div>
  );
}

export default App;
