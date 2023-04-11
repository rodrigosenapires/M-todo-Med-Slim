const audioControl = document.getElementById("audio-control");
const bgVideo = document.getElementById("bg-video");

audioControl.addEventListener("click", () => {
  if (bgVideo.muted) {
    bgVideo.muted = false;
    audioControl.classList.remove("fa-volume-mute");
    audioControl.classList.add("fa-volume-up");
  } else {
    bgVideo.muted = true;
    audioControl.classList.remove("fa-volume-up");
    audioControl.classList.add("fa-volume-mute");
  }
});
