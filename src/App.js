import logo from './logo.svg';
import './App.css';
import LikeBtn from './Components/LikeBtn';
import OtherTracks from './Components/OtherTracks';
import SongInfo from './Components/SongInfo';
import PlaySong from './Components/PlaySong';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        
        <img src="logo512.png" className="App-logo" width="10%"  alt="logo" />
        
        <p>
          Tom's Fav' Music (first react project)
        </p>
         
        <hr width="500px" />

        <SongInfo />

        <PlaySong />


        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=gtJeaQVOExg&list=WL&index=3"
          target="_blank"
          rel="noopener noreferrer">
        Listen on YouTube</a>



        <button >1 more</button>

        <LikeBtn />

        <OtherTracks />
        





      </header>
    </div>
  );
}

export default App;
