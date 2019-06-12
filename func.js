// $j optional alias to jQuery noConflict() <- call the Jquery without conflict for Popover
let $j = jQuery.noConflict();

$j(document).ready(function () {
  console.log('pret');
  $j('[data-toggle="popover"]').popover({
    trigger: 'hover'
  });
});

/////// Weather Widget 
! function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'weatherwidget-io-js');

/////// GET Method
/////// Chuck Norris Fact
const quote = document.getElementById('quote');


var request = new XMLHttpRequest();
request.open('GET', 'https://api.chucknorris.io/jokes/random?category=dev', true);
request.onload = function () {

  //
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    console.log('Ready CN');
    quote.innerHTML = data.value;
  } else {
    console.log('Error fetching the quote. Status code ' + request.status);
  }
}

request.send();