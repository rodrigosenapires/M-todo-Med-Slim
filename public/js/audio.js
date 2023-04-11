const audioControl = document.getElementById("audio-control");
const bgVideo = document.getElementById("bg-video");

function onYouTubeIframeAPIReady() {
  bgVideo.player = new YT.Player("bg-video", {
    events: {
      onReady: function (event) {
        event.target.setVolume(0);
      }
    }
  });
}

audioControl.addEventListener("click", () => {
  if (bgVideo.player.isMuted()) {
    bgVideo.player.unMute();
    audioControl.classList.remove("fa-volume-mute");
    audioControl.classList.add("fa-volume-up");
  } else {
    bgVideo.player.mute();
    audioControl.classList.remove("fa-volume-up");
    audioControl.classList.add("fa-volume-mute");
  }
});

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
