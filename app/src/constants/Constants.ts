export const appConst = {
  htmlStr: `
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HTML5 Fullscreen Video Autoplay Background</title>
  
      <style>
        html,
        body {
          margin: 0;
          height: 100%;
          overflow: hidden;
        }
        #background-con img{
          width: 100%;
          height: auto;
        }
      </style>
    </head>
    <body>
      <div id="background-con"></div>
      <div id="video-elem">
      </div>
    </body>
  </html>  
  `,
  jsScript: `
  window.ReactNativeWebView.postMessage("got js");

  var backgroundContainer = document.getElementById("background-con");
  var elem = document.getElementById("video-elem");

  var thumbnailSrc = "https://dev.breeze.com.sg/app/tutorial/thumbnail_parking.png";
  var imageElem = document.createElement("img");
  imageElem.setAttribute("src", thumbnailSrc);
  backgroundContainer.appendChild(imageElem);
  backgroundContainer.addEventListener("click", myFunction);

  var video;
  window.ReactNativeWebView.postMessage("after video");

  function openFullscreen() {
    window.ReactNativeWebView.postMessage("open full screen");
    video = document.createElement("video");
    var source = document.createElement("source");
    var videoSource = "https://dev.breeze.com.sg/app/tutorial/parking.mp4";
    source.setAttribute("src", videoSource);
    source.setAttribute("type", "video/mp4");
    video.appendChild(source);

    elem.appendChild(video);

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* IE11 */
      video.msRequestFullscreen();
    }
    video.load();
    video.play();
  }

  document.addEventListener(
    "fullscreenchange",
    function () {
      if (!document.fullscreen) {
        video.remove();
      }
    },
    false
  );
  document.addEventListener(
    "mozfullscreenchange",
    function () {
      if (!document.mozFullScreen) {
        video.remove();
      }
    },
    false
  );
  document.addEventListener(
    "webkitfullscreenchange",
    function () {
      if (!document.webkitIsFullScreen) {
        video.remove();
      }
    },
    false
  );

  function myFunction() {
    window.ReactNativeWebView.postMessage("open full screen");
    openFullscreen();
  }
  `,
}
