// <script>
// function myFunction() {
    // alert(document.getElementByLetter("keypress").style.background-color);
// }
// </script>


// $(".divs").hide();
// console.log(letter.is-hidden());


i=0;
$(document).ready(function(){

  $(window).keypress(function(e){
    var value= Math.floor(Math.random()*13);

   Chat.sendMessage({
    sender:'letter',
    type:'raw',
    value: value
   });  
  });
})

var divs={

  0:"letter-A-B",
  1:"letter-C-D",
  2:"letter-E-F",
  3:"letter-G-H",
  4:"letter-I-J",
  5:"letter-K-L",
  6:"letter-M-N",
  7:"letter-O-P",
  8:"letter-Q-R",
  9:"letter-S-T",
  10:"letter-U-V",
  11:"letter-W-X",
  12:"letter-Y-Z",
 
}

Chat.onMessage(function(data){
  console.log(data.value);
  var value=data.value;
  var div=divs[value];
  var $div = $("." + div);
  $div.clone().prependTo('body');
});


/*$(".divs").hide();
console.log(letter.show());




/*function changeBackground(color) {
   document.body.style.background = color;
}

<BODY onload="changeBackground('red');">*/



var username;


// When the user clicks the submit button, we want to save the 
// username they entered, hide the form, and show the color input
$('.submit-button').keypress (function (e) {
  username = $('.username-input').val();

  $('.username-form').addClass('is-hidden');
  $('.letter-input').removeClass('is-hidden');
});

/*message.className ='message';
message.innerHTML += 'From: ' + data.sender + '<br>';
message.innerHTML += 'Type: ' + data.type + '<br>';
message.innerHTML += 'Value: ' + data.value;
messageContainer.appendChild(message);


var user=0;
console.log('new user')
users=NumUsers;*/


