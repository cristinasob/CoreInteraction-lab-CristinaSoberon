
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

