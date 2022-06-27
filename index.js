// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function getData(data) {
  console.log('data is :', data);
}

var debounce = (function () {
  var timer;
  return function (cb, delay) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      cb();
    }, delay);
  };
})();

document.getElementById('search').addEventListener('keyup', function (evt) {
  debounce(function () {
    getData(evt.target.value);
  }, 500);
});
