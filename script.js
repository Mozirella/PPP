function selectBuild(type) {
  const result = document.getElementById("result");

  if (type === "rwb") {
    result.innerHTML = `
      <img src="rwblogo.png" class="logo">
      <h2>RWB</h2>
      <img src="rwb.png" class="car">
      <p>Raw. Wide. Aggressive.</p>
    `;
    document.body.style.background = "#0f0f0f";
  }

  if (type === "singer") {
    result.innerHTML = `
      <img src="singerlogo.png" class="logo">
      <h2>Singer</h2>
      <img src="singer.png" class="car">
      <p>Luxury. Precision. Reimagined.</p>
    `;
    document.body.style.background = "#1a1a1a";
  }

  if (type === "gunther") {
    result.innerHTML = `
      <img src="guntherwerkslogo.jpg" class="logo">
      <h2>Gunther Werks</h2>
      <img src="guntherwerks.png" class="car">
      <p>Modern Performance. Heritage DNA.</p>
    `;
    document.body.style.background = "#111";
  }
}
