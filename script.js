const audio = (document.query = Selector("audio"));
const body = document.body;

audio.addEventListener("play", () => {
  body.classList.add("play-music");
});

audio.addEventListener("pause", () => {
  body.classList.remove("play-music");
});
