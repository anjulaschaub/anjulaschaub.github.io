function playPause() {

    var myVideo = document.getElementsByTagName('video')[0];

    if (myVideo.paused)

        myVideo.play();

    else

        myVideo.pause();

}

function makeBig() {

   var myVideo = document.getElementsByTagName('video')[0];

   myVideo.height = myVideo.videoHeight * 2;

}

function makeNormal() {

   var myVideo = document.getElementsByTagName('video')[0];

   myVideo.height = myVideo.videoHeight;

}
