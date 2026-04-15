function getVideo(url, thumb) {
  return `
    <div class="video-preview" onclick="openVideo('${url}')">
      <img src="${thumb}" class="video-thumb">
      <div class="play-button">▶</div>
    </div>
  `;
}

function openVideo(url) {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");

  frame.src = url + "embed";
  modal.style.display = "flex";
}

function closeVideo() {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("videoFrame").src = "";
}

function selectBuild(type, el) {
  const result = document.getElementById("result");

  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.remove("active");
  });

  el.classList.add("active");

  if (type === "rwb") {
    result.innerHTML = `
      <a href="https://rwb.jp/" target="_blank">
        <img src="assets/rwblogo.png" class="logo">
      </a>
      <h2>RWB</h2>
      <img src="assets/rwb.png" class="car">
      <p>Raw. Wide. Aggressive.</p>
      ${getVideo("https://www.instagram.com/p/DWvokTCE2cL/", "assets/rwb.png")}
    `;
  }

  if (type === "singer") {
    result.innerHTML = `
      <a href="https://singervehicledesign.com/" target="_blank">
        <img src="assets/singerlogo.png" class="logo">
      </a>
      <h2>Singer</h2>
      <img src="assets/singer.png" class="car">
      <p>Luxury. Precision. Reimagined.</p>
      ${getVideo("https://www.instagram.com/p/C5lGS_tPKLI/", "assets/singer.png")}
    `;
  }

  if (type === "gunther") {
    result.innerHTML = `
      <a href="https://guntherwerks.com/" target="_blank">
        <img src="assets/guntherwerkslogo.png" class="logo">
      </a>
      <h2>Gunther Werks</h2>
      <img src="assets/guntherwerks.png" class="car">
      <p>Modern Performance. Carbon Precision.</p>
      ${getVideo("https://www.instagram.com/p/DV185_8AdXF/", "assets/guntherwerks.png")}
    `;
  }
}
