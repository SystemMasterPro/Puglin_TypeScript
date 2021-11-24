import MediaPlayer from "@richardeveloper/pluginmediaplayer";
import AutoPlay from "@richardeveloper/pluginmediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@richardeveloper/pluginmediaplayer/lib/plugins/AutoPause";
import Ads from "@richardeveloper/pluginmediaplayer/lib/plugins/Ads/Ads";

const video = document.querySelector('video');
const player = new MediaPlayer({
    el: video,
    plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement = document.querySelector('#playButton');
playButton.onclick = () => player.togglePlay();

const muteButton: HTMLElement = document.querySelector('#muteButton');
muteButton.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
};

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}

