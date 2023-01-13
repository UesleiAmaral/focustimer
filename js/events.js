export const EventSoundOff = (sound) => {
  return sound.buttonSoundOff.addEventListener('click', () => {
    sound.soundOff();
  });
};

export const EventSoundOn = (sound) => {
  return sound.buttonSoundOn.addEventListener('click', () => {
    sound.soundOn();
  });
};

export const EventButtonPlay = (controls, countdown) => {
  return controls.buttonPlay.addEventListener('click', () => {
    controls.play();
    controls.stop();
    countdown.countdown();
  });
};
