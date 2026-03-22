document.querySelector('.filho01').addEventListener('click', function() {
  const filho02 = document.querySelector('.filho02');
  const filho04 = document.querySelector('.filho04');
  if (filho02.style.display === 'inline-block') {
    filho02.style.display = 'none';
  } else {
    filho02.style.display = 'inline-block';
  }
  
    filho04.style.display = 'none';
});

document.querySelector('.filho03').addEventListener('click', function(){
  const filho04 = document.querySelector('.filho04');
  const filho02 = document.querySelector('.filho02');

  if (filho04.style.display === 'inline-block'){
    filho04.style.display = 'none';
    }else{
      filho04.style.display = 'inline-block';
    }

    filho02.style.display = 'none';
});