
// console.log("postInit.js loaded");
var scriptMd5 = document.createElement("script");
scriptMd5.src = "/static/js/md5.js";
document.head.appendChild(scriptMd5);

scriptMd5.onload = function () {
  // console.log("md5.js loaded")
  // step1. sythx highlighting
  syntaxHighlight();
  // step2. lazyload
  initLazyLoad();
  // step3. aplayer
  initAplayer();
}

function initAplayer() {
  
  var script = document.createElement("script");
  script.src = "//cdn.staticfile.org/aplayer/1.10.1/APlayer.min.js";
  document.head.appendChild(script);

  var style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "//cdn.staticfile.org/aplayer/1.10.1/APlayer.min.css";
  document.head.appendChild(style);

  const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    audio: {
        name: 'shall we talk',
        artist: 'Eason Chan',
        url: '/Music/Shall_we_talk/陳奕迅 – Shall We Talk.mp3',
        cover: '/Music/Shall_we_talk/Cover.jpeg',
        lrc: '/Music/Shall_we_talk/Shall We Talk-MusicEnc.lrc'
    }
});

}

function initLazyLoad() {
  var script = document.createElement("script");
  script.src = "/static/js/animation.js";
  document.head.appendChild(script);

  script.onload = function () {
    // console.log("lazyload.js loaded");

    animationElementName = ".image-load";

    // Hook the loadImage function
    loadImage = (index) => {
      if (index >= imageElements.length) return;

      let image = imageElements[index];
      image.src = image.dataset.src;
      let img = new Image();
      img.src = image.src;

      // if the image is loaded or not loaded, load the next image
      img.onload = function () {
        loadImage(index + 1);
      };
      img.onerror = function () {
        loadImage(index + 1);
      }
    }

    loadAnimation = (item) => {
      if (item.classList.contains("image-loaded")) return;
      let grandSon = item.firstChild.firstChild;
      let img = new Image();
      img.src = grandSon.src;

      let sign = md5(grandSon.src);

      let target = document.getElementById(`lht${sign}`)
      if (!target)  {
          // If an absolute path is used as the image link, such as "/static/img.png",
          // the URL of grandSon.src will become "https://example.com/static/img.png", resulting in a different md5.
          // Therefore, we attempt to handle this situation by trying again with the absolute path.
          const a = document.createElement('a');
          a.href = grandSon.src;
          sign = md5(a.pathname);
      }

      img.onload = function () {
        let percent = ((img.height / img.width) * 100).toFixed(5);
        var style = document.createElement("style");
        style.innerHTML = renderStyle(sign, percent);
        let target = document.getElementById(`lht${sign}`)

        if (!target) return;

        target.parentNode.insertBefore(style, target);
        item.classList.remove("image-load");
        item.classList.add("image-loaded");
      }

    }

    initImage();
  };
}


function renderStyle(sign, percent) {
  return `
      .image-${sign} {
      width: 100%;
      padding-top: ${percent}%;
      height: auto;
  }

  @media only screen and (max-width: 1068px) {
      .image-${sign} {
      width: 100%;
      padding-top: ${percent}%;
      height: auto;
    }
  }

  @media only screen and (max-width: 734px) {
    .image-${sign} {
    width: 100%;
    padding-top: ${percent}%;
    height: auto;
  }
  };`
}

function syntaxHighlight() {
  var script = document.createElement("script");
  script.src = "//cdn.staticfile.org/highlight.js/11.7.0/highlight.min.js";
  document.head.appendChild(script);

  var styleLight = document.createElement("link");
  styleLight.rel = "stylesheet";
  styleLight.href = "//cdn.staticfile.org/highlight.js/11.7.0/styles/stackoverflow-light.min.css";

  var styleDark = document.createElement("link");
  styleDark.rel = "stylesheet";
  styleDark.href = "//cdn.staticfile.org/highlight.js/11.7.0/styles/stackoverflow-dark.min.css";

  var cs = window.matchMedia("(prefers-color-scheme: light)")

  if (cs.matches) {
    document.head.appendChild(styleLight);
  } else {
    document.head.appendChild(styleDark);
  }

  script.onload = function () {
    // console.log("hljs.js loaded");
    // 忽略未转义的HTML警告，自己的md文档默认可信
    hljs.configure({
      ignoreUnescapedHTML: true
    });
    document.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  };
}