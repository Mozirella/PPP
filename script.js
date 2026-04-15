function selectBuild(type, el) {
  const result = document.getElementById("result");

  // reset buttons
  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.remove("active");
  });

  el.classList.add("active");

  // glow
  document.body.classList.remove("rwb", "singer", "gunther");
  document.body.classList.add(type);

  if (type === "rwb") {
    result.innerHTML = `
      <a href="https://rwb.jp/" target="_blank">
        <img src="assets/rwblogo.png" class="logo">
      </a>
      <h2>RWB</h2>
      <img src="assets/rwb.png" class="car">
      <p>Raw. Wide. Aggressive.</p>

      <div class="ig-wrapper">
        <blockquote class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DWvokTCE2cL/"
          data-instgrm-version="14">
        </blockquote>
      </div>
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

      <div class="ig-wrapper">
        <blockquote class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/C5lGS_tPKLI/"
          data-instgrm-version="14">
        </blockquote>
      </div>
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

      <div class="ig-wrapper">
        <blockquote class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DV185_8AdXF/"
          data-instgrm-version="14">
        </blockquote>
      </div>
    `;
  }

  // render fix IG
  setTimeout(() => {
    if (window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, 300);
}
