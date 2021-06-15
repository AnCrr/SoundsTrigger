document.body.addEventListener('keydown', function(e){
    var keyCode = e.keyCode;
    if (keyCode === 65) {
    var clap = new Audio('audio/clap.mp3');
    clap.play(); }

    else if (keyCode === 83) {
    var hihat = new Audio('audio/hihat.mp3');
    hihat.play();
   };

    if (keyCode === 68) {
    var kick = new Audio('audio/kick.mp3');
    kick.play();
   };

    if (keyCode === 70) {
    var openhat = new Audio('audio/openhat.wav');
    openhat.play();
   };

    if (keyCode === 71) {
    var boom = new Audio('audio/boom.wav');
    boom.play();
   };

   if (keyCode === 72) {
    var ride = new Audio('audio/ride.wav');
    ride.play();
   };

    if (keyCode === 74) {
    var snare = new Audio('audio/snare.wav');
    snare.play();
   };

   if (keyCode === 75) {
    var tom = new Audio('audio/tom.wav');
    tom.play();
   };

   if (keyCode === 76) {
    var tink = new Audio('audio/tink.wav');
    tink.play();
   };
 
});