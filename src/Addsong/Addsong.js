import { useRef, useState } from "react";


function Addsong(){

    const[musicPlay, setMusicPlay] = useState(true)
    const refAudio = useRef()

    const handleMusic = () => {
        setMusicPlay(!musicPlay)
        musicPlay ? refAudio.current.play() : refAudio.current.pause()
    }

    return(
        <div>
        <audio src='song.mp3'
        loop="loop"
        ref={refAudio}>
        </audio>
        
        <button onClick={handleMusic}>{musicPlay ? 'Play' : 'Pause'}</button>
            
        </div>
    )
}

export default Addsong;