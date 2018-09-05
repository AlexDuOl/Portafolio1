// Animations init
new WOW().init();

var rainyDay = new RainyDay({
   image: '#background'
//img // [Required][Image Id or Image element itself, Id of Element having background Image or Element itself]
})

  function quellueva() {  
     var image = document.getElementById('background');
     image.onload = function() {
          var engine = new RainyDay({
               image: this,
               blur: 10,
               opacity: 1,
               gravityAngle: Math.PI / 2,
               gravityAngleVariance: 0
          });
          engine.gravity = engine.GRAVITY_NON_LINEAR;
          engine.trail = engine.TRAIL_SMUDGE;
          engine.rain([ 
               [0, 3, 8], 
               [3, 8, 1]
          ], 50);
      };
      image.crossOrigin = 'anonymous';
      image.src = './css/assets/images/viastren.jpg';
}