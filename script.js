function selectBuild(type) {
  const result = document.getElementById("result");

  if (type === "rwb") {
    result.innerHTML = `
      <img src="rwblogo.png" class="logo">
      <h2>RWB</h2>
      <img src="rwb.png" class="car">
      <p>Raw. Wide. Aggressive.</p>
    `;

    document.body.style.background = `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)),
      url('rwb.png') center/cover no-repeat
    `;
  }

  if (type === "singer") {
    result.innerHTML = `
      <img src="singerlogo.png" class="logo">
      <h2>Singer</h2>
      <img src="singer.png" class="car">
      <p>Luxury. Precision. Reimagined.</p>
    `;

    document.body.style.background = `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)),
      url('singer.png') center/cover no-repeat
    `;
  }

  if (type === "gunther") {
    result.innerHTML = `
      <img src="guntherwerkslogo.jpg" class="logo">
      <h2>Gunther Werks</h2>
      <img src="guntherwerks.png" class="car">
      <p>Modern Performance. Carbon Precision.</p>
    `;

    document.body.style.background = `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)),
      url('guntherwerks.png') center/cover no-repeat
    `;
  }
}

document.querySelectorAll(".buttons button").forEach(btn => {
  btn.classList.remove("active");
});

event.target.classList.add("active");
