// The home page's clock runs at the game's own rate: 1 real hour = 1 game day,
// which is 0.4 game minutes a second, starting from the game's Day 1 8:00 AM.
(function () {
  var el = document.getElementById("clock");
  if (!el) return;
  var start = Date.now();
  function render() {
    var minutes = 8 * 60 + Math.floor(((Date.now() - start) / 1000) * 0.4);
    var day = 1 + Math.floor(minutes / 1440);
    var m = minutes % 1440;
    var h = Math.floor(m / 60);
    var mm = m % 60;
    el.textContent = "Day " + day + " " + (h % 12 || 12) + ":" + (mm < 10 ? "0" : "") + mm + (h < 12 ? " AM" : " PM");
  }
  render();
  setInterval(render, 500);
})();
