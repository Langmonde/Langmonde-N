document.addEventListener('DOMContentLoaded', function () {
 
            function audioAutoPlay() {
 
              var audio = document.getElementById('bgmusic');
 
                  audio.play();
 
              document.addEventListener("WeixinJSBridgeReady", function () {
 
                  audio.play();
 
              }, false);
 
            }
 
            audioAutoPlay();
 
            });
 
            if (/i(Phone|P(o|a)d)/.test(navigator.userAgent)) {
 
            $(document).one('touchstart',
 
            function(e) {
 
                $('#bgmusic').get(0).touchstart = true;
 
                $('#bgmusic').get(0).play();
 
                return false;
 
            });
 
        }
