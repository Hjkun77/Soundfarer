const Circle1 = document.querySelector('#circle1');
const Circle2 = document.querySelector('#circle2');
const Circle3 = document.querySelector('#circle3');
const Circle4 = document.querySelector('#circle4');
const Circle5 = document.querySelector('#circle5');
const Circle6 = document.querySelector('#circle6');
const Circle7 = document.querySelector('#circle7');
const Circle8 = document.querySelector('#circle8');

const Button2 = document.querySelector('#task2-button');
const Button3 = document.querySelector('#task3-button');
const Button4 = document.querySelector('#task4-button');
const Button5 = document.querySelector('#task5-button');
const Button6 = document.querySelector('#task6-button');
const Button7 = document.querySelector('#task7-button');
const Button8 = document.querySelector('#task8-button');

function toggleTask1() {
  Button2.disabled = true;
  Circle1.classList.replace('check', 'current')
  Circle2.classList.replace('current', 'question')
}

function toggleTask2() {
  Button2.disabled = false;
  Circle1.classList.replace('current', 'check');
  Circle2.classList.replace('question', 'current')

  Button3.disabled = true;
  Circle2.classList.replace('check', 'current')
  Circle3.classList.replace('current', 'question')
}

function toggleTask3() {
  Button3.disabled = false;
  Circle2.classList.replace('current', 'check');
  Circle3.classList.replace('question', 'current')

  Button4.disabled = true;
  Circle3.classList.replace('check', 'current')
  Circle4.classList.replace('current', 'question')
}

function toggleTask4() {
  Button4.disabled = false;
  Circle3.classList.replace('current', 'check');
  Circle4.classList.replace('question', 'current')

  Button5.disabled = true;
  Circle4.classList.replace('check', 'current')
  Circle5.classList.replace('current', 'question')
}

function toggleTask5() {
  Button5.disabled = false;
  Circle4.classList.replace('current', 'check');
  Circle5.classList.replace('question', 'current')

  Button6.disabled = true;
  Circle5.classList.replace('check', 'current')
  Circle6.classList.replace('current', 'question')
}

function toggleTask6() {
  Button6.disabled = false;
  Circle5.classList.replace('current', 'check');
  Circle6.classList.replace('question', 'current')

  Button7.disabled = true;
  Circle6.classList.replace('check', 'current')
  Circle7.classList.replace('current', 'question')
}

function toggleTask7() {
  Button7.disabled = false;
  Circle6.classList.replace('current', 'check');
  Circle7.classList.replace('question', 'current')

  Button8.disabled = true;
  Circle7.classList.replace('check', 'current')
  Circle8.classList.replace('current', 'question')
}

function toggleTask8() {
  Button8.disabled = false;
  Circle7.classList.replace('current', 'check');
  Circle8.classList.replace('question', 'current')
}
