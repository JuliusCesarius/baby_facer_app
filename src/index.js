import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import soundfile from './images/music.mp3';
import Sound from 'react-sound';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div class="avocado-1"></div>
    <div class="avocado-2"></div>
    <Sound url={soundfile} autoLoad={true} loop={true} playStatus={Sound.status.PLAYING}/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
