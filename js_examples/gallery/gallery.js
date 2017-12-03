var images = document.getElementsByClassName('image');
var output = document.getElementById('output');
for(var i = 0; i < images.length; i++){
  images[i].addEventListener('click', showImg(i+1));
}

function showImg(n){
  return function(){
    output.innerHTML = '<img src="images/img0' + n + '.jpg">';
  };
}
