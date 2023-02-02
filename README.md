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

### 2. Import styles:
For **css:**
```html
<link href="countdown-timer/styles/css/style.css" rel="stylesheet">
```

For **scss:**
```scss
@import "countdown-timer/styles/scss/style.scss";
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

## API
Initialization timer:
```js
timer.init()
```
Destroy timer:
```js
timer.destroy()
```

Get the formatted time as object:
```js
timer.time

result = {
  hours: hh,
  minutes: mm,
  seconds: ss,
}
```

## HTML structure of timer
If you have set autoGenerate: false, you need to put this code:
```html
<div class="timer">
  <div class="timer-item timer-hours">
    <span class="timer-digit"></span>
    <span class="timer-digit"></span>
  </div>
  <div class="timer-item timer-minutes">
    <span class="timer-digit"></span>
    <span class="timer-digit"></span>
  </div>
  <div class="timer-item timer-seconds">
    <span class="timer-digit"></span>
    <span class="timer-digit"></span>
  </div>
</div>;
```
