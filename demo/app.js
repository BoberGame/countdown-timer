import { CountdownTimer } from '../js/core.js';
const timer = new CountdownTimer('.timer', {
  type: 'number',
  time: 24,
  changeTitle: false,
  autoDestroy: false,
  autoGenerate: true,
});
timer.init();
