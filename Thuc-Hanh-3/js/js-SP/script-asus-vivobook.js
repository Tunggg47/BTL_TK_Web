var images = [
    "/images/asus-vivoboook-SP-0.jpg",
    "/images/asus-vivoboook-SP-1.jpg",
    "/images/asus-vivoboook-SP-2.jpg",
    "/images/asus-vivoboook-SP-3.jpg"
  ];
  var num = 0;
  
  function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
  }
  
  function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
  }