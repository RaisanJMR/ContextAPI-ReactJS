import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';
function SongList() {
  const [songs, setSongs] = useState([
    { id: 1, title: 'almost home' },
    { id: 2, title: 'memory gosphel' },
    { id: 3, title: 'this wild darkness' },
  ]);
  const addSong = (title) => {
    setSongs([
      ...songs,
      { id: Math.random(Math.floor * 1000000000), title: title },
    ]);
    console.log(songs);
  };
  const [age, setAge] = useState(20);
  useEffect(() => {
    console.log('use Effect hook ran from songs');
  }, [songs]);
  useEffect(() => {
    console.log('use Effect hook ran from age');
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={addSong}>Add song</button>
      <button onClick={() => setAge(age + 1)}>add 1 to age {age}</button>
    </div>
  );
}

export default SongList;
