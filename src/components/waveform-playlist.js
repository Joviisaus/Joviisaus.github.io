import WaveformPlaylist from "waveform-playlist";

var playlist = WaveformPlaylist({
  samplesPerPixel: 3000,
  mono: true,
  waveHeight: 70,
  container: document.getElementById("playlist"),
  state: "cursor",
  colors: {
    waveOutlineColor: "#E0EFF1",
    timeColor: "grey",
    fadeColor: "black",
  },
  controls: {
    show: false,
    width: 150,
  },
  zoomLevels: [500, 1000, 3000, 5000],
});

playlist
  .load([
    {
      src: "/Music/陳奕迅 – Shall We Talk.mp3",
      name: "Shall We Talk",
      gain: 0.5,
    }
  ])
  .then(function () {
    var ee = playlist.getEventEmitter();
            document.getElementById("btn-play").addEventListener("click", function () {
                ee.emit("play");
            });

            document.getElementById("btn-pause").addEventListener("click", function () {
                ee.emit("pause");
            });
    // can do stuff with the playlist.
  });