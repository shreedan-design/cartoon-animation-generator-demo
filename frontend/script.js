const swing = (t, range) => Math.sin(t) * range;

let t = 0;
function animateCharacter() {
    document.getElementById('left_arm').style.transform = `rotate(${swing(t, 40)}deg)`;
    document.getElementById('right_arm').style.transform = `rotate(${-swing(t, 40)}deg)`;
    document.getElementById('left_leg').style.transform = `rotate(${swing(t, 30)}deg)`;
    document.getElementById('right_leg').style.transform = `rotate(${-swing(t, 30)}deg)`;
    document.getElementById('head').style.transform = `rotate(${swing(t, 10)}deg)`;
    t += 0.05;
    requestAnimationFrame(animateCharacter);
}

// Start infinite animation
animateCharacter();
