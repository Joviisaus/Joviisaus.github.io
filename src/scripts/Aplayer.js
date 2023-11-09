import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';


const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    audio: {
        name: 'shall we talk',
        artist: 'Eason Chan',
        url: '/Music/Shall_we_talk/陳奕迅 – Shall We Talk.mp3',
        cover: '/Music/Shall_we_talk/Cover.jpeg',
        lrc: '/Music/Shall_we_talk/Shall We Talk-MusicEnc.lrc'
    }
});




