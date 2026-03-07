function createMatrix(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.height = window.innerHeight;
  canvas.width  = 120;

  const letters  = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*<>/|~SELECT UNION WHERE";
  const fontSize = 13;
  const columns  = Math.floor(canvas.width / fontSize);
  const drops    = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(5,13,10,0.07)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";
    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 45);

  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
  });
}

createMatrix("matrix-left");
createMatrix("matrix-right");
