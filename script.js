function selectBuild(type) {
  const result = document.getElementById("result");
  const body = document.body;

  if (type === "rwb") {
    result.innerHTML = "🏁 RWB: Raw. Wide. Aggressive.";
    body.style.background = "#111";
  }

  if (type === "singer") {
    result.innerHTML = "✨ Singer: Precision. Luxury. Reimagined.";
    body.style.background = "#1a1a1a";
  }

  if (type === "luft") {
    result.innerHTML = "🌬 Luftgekühlt: Heritage. Air-cooled. Pure.";
    body.style.background = "#0a0a0a";
  }
}
