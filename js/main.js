import { Controls } from './controls.js';
import { Sound } from './sound.js';
import { Countdown, TimerTimeout } from './countdown.js';

Controls.buttonPlay.addEventListener('click', () => {

  Controls.play();
  Controls.stop();

  Countdown.countdown();

});

Controls.buttonPause.addEventListener('click', () => {
  Controls.pause();
  clearTimeout(TimerTimeout);
});

Controls.buttonStop.addEventListener('click', () => {

  Controls.resetControls();
  Countdown.resetTimer();

});

Controls.buttonSet.addEventListener('click', () => {

  Controls.setTime();

})

Sound.buttonSoundOn.addEventListener('click', () => {

  Sound.soundOn();

});

Sound.buttonSoundOff.addEventListener('click', () => {

  Sound.soundOff();

});