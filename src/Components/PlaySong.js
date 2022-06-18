import React, {useState} from 'react'

export default function PlaySong() {
    let [playbtn, setplaybtn] = useState('play-icon.png');
    
    function playPressed() {
        // const playPauseIcon = document.getElementById("playIcon")
        // console.log(playPauseIcon.src)
        // playPauseIcon.src = "pause-icon.png"
        // console.log(playPauseIcon.src)
        // let toggle = false
        console.log(playbtn)
        playbtn = 'pause-icon.png'
        // if (toggle=true) {
        //     document.getElementById("playIcon").src="play-icon.png"
        //     // toggle=false
        // }
        // else{
        //     playPauseIcon.src = "pause-icon.png"
        //     toggle=true
        // }
    };
    
    return (
    <>
    <div>
    
    <img  onClick={playPressed} src={playbtn} id='playIcon' />
    
    </div>
    <hr width="500px"/>
    </>
  )
}
