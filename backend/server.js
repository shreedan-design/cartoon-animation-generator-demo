const express = require('express');
const path = require('path');
const app = express();

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// API for different actions
app.get('/api/pose/:action', (req, res) => {
    const action = req.params.action;
    let pose = {};

    switch(action) {
        case 'walk':
            pose = { head: 5, leftArm: -40, rightArm: 40, leftLeg: 30, rightLeg: -30 };
            break;
        case 'jump':
            pose = { head: 10, leftArm: -20, rightArm: 20, leftLeg: 50, rightLeg: 50 };
            break;
        case 'idle':
        default:
            pose = { head: 0, leftArm: 0, rightArm: 0, leftLeg: 0, rightLeg: 0 };
    }

    res.json(pose);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
