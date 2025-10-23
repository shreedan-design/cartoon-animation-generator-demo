const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
const btn = document.getElementById('animateBtn');

btn.addEventListener('click', () => {
  let x = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const interval = setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${x * 3}, 100%, 50%)`;
    ctx.fill();
    ctx.closePath();
    x++;
    if (x > 120) clearInterval(interval);
  }, 50);
});
