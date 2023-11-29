
import './App.css';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import List from './components/List';
import { Songs } from './Context';
import DataSongs from './Data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
  }
  return (
    <div className="App">

      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-900 h-screen-navbar-player overflow-hidden'>
          <Detail />
          <List />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
