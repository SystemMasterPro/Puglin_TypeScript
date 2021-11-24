import MediaPlayer from "./moProto.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({ el: video })
button.onclick = () => player.togglePlay();