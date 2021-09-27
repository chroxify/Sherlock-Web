// Components
import { React, useState } from 'react';
import Header from './Components/Header/Header.js'
import SearchBar from './Components/SearchBar/SearchBar.js';
import MainMenu from './Components/MainMenu/MainMenu.js';

// CSS
import './App.css';

function App() {
  const [isPending, setisPending] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchBar setisPending={setisPending} isPending={isPending} setData={setData} />
      <MainMenu isPending={isPending} data={data} />
    </div>
  );
}

export default App;
