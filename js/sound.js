export const Sound = {

  buttonSoundOn: document.querySelector('.sound-on'),
  buttonSoundOff: document.querySelector('.sound-off'),

  soundOn() {
    Sound.buttonSoundOn.classList.add('hide');
    Sound.buttonSoundOff.classList.remove('hide');

  },

  soundOff() {
    Sound.buttonSoundOff.classList.add('hide');
    Sound.buttonSoundOn.classList.remove('hide');

  }
}