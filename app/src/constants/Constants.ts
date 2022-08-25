export const appConst = {
  htmlStr:
    '<html lang="en">\n' +
    '  <head>\n' +
    '    <meta charset="UTF-8" />\n' +
    '    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n' +
    '    <title>HTML5 Fullscreen Video Autoplay Background</title>\n' +
    '\n' +
    '    <style>\n' +
    '      html,\n' +
    '      body {\n' +
    '        margin: 0;\n' +
    '        height: 100%;\n' +
    '        overflow: hidden;\n' +
    '      }\n' +
    '      #background-con img{\n' +
    '        width: 100%;\n' +
    '        height: auto;\n' +
    '      }\n' +
    '    </style>\n' +
    '  </head>\n' +
    '  <body>\n' +
    '    <div id="background-con" onclick="myFunction()"></div>\n' +
    '\n' +
    '    <div id="video-elem"></div>\n' +
    '    <script>\n' +
    '      var backgroundContainer = document.getElementById("background-con");\n' +
    '      var elem = document.getElementById("video-elem");\n' +
    '\n' +
    '      var thumbnailSrc = "https://dev.breeze.com.sg/app/tutorial/thumbnail_parking.png";\n' +
    '      var imageElem = document.createElement("img");\n' +
    '      imageElem.setAttribute("src", thumbnailSrc);\n' +
    '      backgroundContainer.appendChild(imageElem);\n' +
    '\n' +
    '      var video;\n' +
    '\n' +
    '      function openFullscreen() {\n' +
    '        video = document.createElement("video");\n' +
    '        var source = document.createElement("source");\n' +
    '        var videoSource = "https://dev.breeze.com.sg/app/tutorial/parking.mp4";\n' +
    '        source.setAttribute("src", videoSource);\n' +
    '        source.setAttribute("type", "video/mp4");\n' +
    '        video.appendChild(source);video.width= 300;video.height= 300;\n' +
    '\n' +
    '        elem.appendChild(video);\n' +
    '\n' +
    '        if (video.requestFullscreen) {\n' +
    '          video.requestFullscreen();\n' +
    '        } else if (video.webkitRequestFullscreen) {\n' +
    '          /* Safari */\n' +
    '          video.webkitRequestFullscreen();\n' +
    '        } else if (video.msRequestFullscreen) {\n' +
    '          /* IE11 */\n' +
    '          video.msRequestFullscreen();\n' +
    '        }\n' +
    '        video.load();\n' +
    '        video.play();\n' +
    '      }\n' +
    '\n' +
    '      document.addEventListener(\n' +
    '        "fullscreenchange",\n' +
    '        function () {\n' +
    '          if (!document.fullscreen) {\n' +
    '            video.remove();\n' +
    '          }\n' +
    '        },\n' +
    '        false\n' +
    '      );\n' +
    '      document.addEventListener(\n' +
    '        "mozfullscreenchange",\n' +
    '        function () {\n' +
    '          if (!document.mozFullScreen) {\n' +
    '            video.remove();\n' +
    '          }\n' +
    '        },\n' +
    '        false\n' +
    '      );\n' +
    '      document.addEventListener(\n' +
    '        "webkitfullscreenchange",\n' +
    '        function () {\n' +
    '          if (!document.webkitIsFullScreen) {\n' +
    '            video.remove();\n' +
    '          }\n' +
    '        },\n' +
    '        false\n' +
    '      );\n' +
    '\n' +
    '      function myFunction() {\n' +
    '        openFullscreen();\n' +
    '      }\n' +
    '    </script>\n' +
    '  </body>\n' +
    '</html>',
};
