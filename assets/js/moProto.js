function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins;
}

function autoPlay(player) {
    player(this);
}

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
}

MediaPlayer.prototype.mute = function () {
    this.mute = true;
}

MediaPlayer.prototype.unmute = function () {
    this.unmute = false;
}

export default MediaPlayer;