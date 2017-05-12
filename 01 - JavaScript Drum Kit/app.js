window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keycode}"]`);

  console.log(audio);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');

  const keys = document.querySelectorAll('.key');
  console.log(keys);
});
