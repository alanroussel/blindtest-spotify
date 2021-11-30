import swal from "sweetalert"
import logo from "./logo.svg"
import loading from "./loading.svg"
import styles from "./App.module.css"
import Button from "./Button"
import { shuffleArray, getRandomNumber } from "./utils"

import { useState, useEffect } from 'react';

// Get token from https://developer.spotify.com/console/get-current-user-saved-tracks/
const apiToken = "BQDaS8Wx7CfDz1sO53Qb3BI7r2GjTJuJPtHKZYQ9MEUas5Jxjh2c39BZ7DmH1a7CRMiX4vsMc_B8mVUbZB9jZco8TIgP2q6BuvjF6XfFqKZlpwAAdZprNGEbGN-L0wiIe62nnkDlAU9RhcS_6PL_6Pc2"

const App = () => {
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');
    const [tracks, setTracks] = useState([]);
    const [songLoaded, setSongLoaded] = useState(false);
    useEffect(() => {
    fetch("https://api.spotify.com/v1/me/tracks", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + apiToken,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data)
        setText2("Réponse reçue ! Voilà ce que j'ai reçu : ")
        setTracks(data.items)
        setSongLoaded(true)
        console.log()
      })
  }, []);
    if (!songLoaded) {
  return (
    <div>
        <img src={loading} className={styles.appLogo} alt="loading" />
    </div>

  )
}       
    else{
    return (
        <div className={styles.app}>
        <header className={styles.appHeader}>
            <img src={logo} className={styles.appLogo} alt="logo" />
            <h1 className={styles.appTitle}>Bienvenue sur le Blindtest</h1>
            <p>Il va falloir modifier le code pour faire un vrai Blindtest !</p>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <button onClick={() => setText('Cliqué !')}>Cliquez moi !</button>
            <p>{text}</p>

            <a className={styles.appLink} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React in Real
            </a>
            <p>{text2}</p>
            <p>Nous avons chargé {tracks.length} chansons.</p>    
            <p>Titre de la première chanson : {tracks[0].track.name}.</p>
        </header>
        </div>
    )
    }
    
}

export default App
