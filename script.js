function selectBuild(type, el) {
  const result = document.getElementById("result");

  // remove active from all buttons
  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.remove("active");
  });

  // add active to clicked
  el.classList.add("active");

  if (type === "rwb") {
    result.innerHTML = `
      <a href="https://rwb.jp/" target="_blank">
        <img src="assets/rwblogo.png" class="logo">
      </a>
      <h2>RWB</h2>
      <img src="assets/rwb.png" class="car">
      <p>Raul. Wide. Aggressive.</p>
    `;

    document.body.style.background = `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)),
      url('rwb.png') center/cover no-repeat
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
    `;

    document.body.style.background = `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)),
      url('singer.png') center/cover no-repeat
    `;
  }

  if (type === "gunther") {
    result.innerHTML = `
      <a href="https://guntherwerks.com/" target="_blank">
        <img src="assets/"guntherwerkslogo.png" class="logo">
      </a>
      <h2>Gunther Werks</h2>
      <img src="assets/"guntherwerks.png" class="car">
      <p>Modern Performance. Carbon Precision.</p>
    `;

    document.body.style.background = `
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)),
      url('guntherwerks.png') center/cover no-repeat
    `;
  }
}
