setTimeout(function (click) {
  console.log=click('that move like waves');
}, 1000);
 
 window.addEventListener('click'),function 
(e){
  var feedback=
  document.createElement('div');
  feedback.innerHTML='HIII';
  feedback.style.position='fixed';
  feedback.style.top= e.pageY+ 'px';
  feedback.style.left= e.pageX+ 'px';
  feedback.style.backgroundColor = 'blue';
  container.appendChild(feedback);
  });


var node = document.querySelector("second-line");
node.style.background =green;
