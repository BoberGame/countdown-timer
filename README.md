## Description
**Countdown-timer** is a free, modern website plugin, written in JavaScript. The main advantage is **performance** and simplicity. 
The timer currently has two modes of operation:
1) Type "number" - takes the number of hours (from 0 to 99)
2) Type "date" - takes date as "Month Day, Year, hh:mm:ss".

## Options
- type: "number"
- time: 1
- changeTitle: false - insert current time in page title 
- autoDestroy: false - if time runs out, the timer will be destroyed (deleted from the DOM)
- autoGenerate: true - automatic generation of timer structure

## How to use it?

### 1. Add timer in html:
```html
<div class="timer"></div>
```

### 2. Import css in head tag:
```html
<link href="countdown-timer/styles/css/style.css" rel="stylesheet">
```

### 3. Import CountdownTimer:
```js
import { CountdownTimer } from 'countdown-timer';
```

### 4. Initialize CountdownTimer:
```js
const timer = new CountdownTimer('timer-className', {
  type: 'number',
  time: 1,
  changeTitle: false,
  autoDestroy: false,
  autoGenerate: true,
});
timer.init();
```
