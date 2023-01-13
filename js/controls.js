import { Countdown } from './countdown.js'

export let Minutes;

export const Controls = {
  buttonPlay: document.querySelector('.play'),
  buttonPause: document.querySelector('.pause'),

  buttonStop: document.querySelector('.stop'),
  buttonSet: document.querySelector('.set'),


  resetControls() {

    Controls.buttonPlay.classList.remove('hide');
    Controls.buttonPause.classList.add('hide');
    Controls.buttonSet.classList.remove('hide');
    Controls.buttonStop.classList.add('hide');

  },

  play() {

    Controls.buttonPlay.classList.add('hide');
    Controls.buttonPause.classList.remove('hide');

  },

  pause() {
    Controls.buttonPlay.classList.remove('hide');
    Controls.buttonPause.classList.add('hide');

  },

  stop() {
    Controls.buttonSet.classList.add('hide');
    Controls.buttonStop.classList.remove('hide');

  },

  setTime() {
    Minutes = prompt('Digite os minutos! Maximo 60 minutos!');

    while (Minutes > 60 || Minutes == null || isNaN(Minutes) ) {
      Minutes = prompt('Digite os minutos! Maximo 60 minutos!');

    }

    Countdown.minutesDisplay.textContent = String(Minutes).padStart(2, '0');

  },

  updateDisplay(minutes, seconds) {
    Countdown.minutesDisplay.textContent = String(minutes).padStart(2, '0');
    Countdown.secondsDisplay.textContent = String(seconds).padStart(2, '0');
  }

};