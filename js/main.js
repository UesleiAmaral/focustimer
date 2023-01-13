import * as events from './events.js';

import { Controls } from './controls.js';
import { Sound } from './sound.js';
import { Countdown, TimerTimeout } from './countdown.js';

events.EventButtonPlay(Controls, Countdown);

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
});

events.EventSoundOn(Sound);
events.EventSoundOff(Sound);
