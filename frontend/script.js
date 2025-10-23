let currentAction = 'idle';

function setAction(action) {
    currentAction = action;
    updatePose();
}

async function updatePose() {
    const res = await fetch(`/api/pose/${currentAction}`);
    const pose = await res.json();

    document.getElementById('head').style.transform = `rotate(${pose.head}deg)`;
    document.getElementById('left_arm').style.transform = `rotate(${pose.leftArm}deg)`;
    document.getElementById('right_arm').style.transform = `rotate(${pose.rightArm}deg)`;
    document.getElementById('left_leg').style.transform = `rotate(${pose.leftLeg}deg)`;
    document.getElementById('right_leg').style.transform = `rotate(${pose.rightLeg}deg)`;
}

// Initial update and loop every 1 sec
updatePose();
setInterval(updatePose, 1000);
