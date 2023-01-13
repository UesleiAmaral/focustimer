import { Controls, Minutes } from './controls.js'

export let TimerTimeout;

export const Countdown = {
  minutesDisplay: document.querySelector('.minutes'),
  secondsDisplay: document.querySelector('.seconds'),

  countdown() {

    TimerTimeout = setTimeout(() => {

      let seconds = Number(Countdown.secondsDisplay.textContent);
      let minutes = Number(Countdown.minutesDisplay.textContent);

      Controls.updateDisplay(minutes, 0);


      if (minutes <= 0 && seconds <= 0) {

        Controls.resetControls();
        Countdown.resetTimer();

        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes

      }

      Controls.updateDisplay(minutes, seconds - 1);

      Countdown.countdown();
    }, 1000)
  },

  resetTimer() {

    if (Minutes == undefined) {
      Controls.updateDisplay(15, 0);

    }
    else {
      Controls.updateDisplay(Minutes, 0);
    }

    clearTimeout(TimerTimeout);
  }

}