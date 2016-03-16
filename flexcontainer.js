$('.my-input').change(function (e){
var black =[0, 200,0];
var yellow=[200, 0, 0];

var value = e.target.value;
  var value = $(e.target).val();
  var max = 30;
 
  var progress = value / max;
  
  var finalColor = [];
  for (var i = 0; i < 3; ++i) {
    var start = black[i];
    var end = yellow[i];
    finalColor[i] = start + (end - start) * progress;
  }
  
  $('body').css({
    backgroundColor: 'rgb(' + finalColor[0] + ',' + finalColor[1] + ',' + finalColor[2] + ')'
  });
});

});