import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accueil';

}

// $j optional alias to jQuery noConflict() <- call the Jquery without conflict
let $j = jQuery.noConflict();

$j(document).ready(function() {
  console.log('pret');
  $j('[data-toggle="popover"]').popover({ trigger : 'hover' });
});


///////////////////////////////////////////////////////////////
!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
  fjs.parentNode.insertBefore(js,fjs);}
}(document,'script','weatherwidget-io-js');
