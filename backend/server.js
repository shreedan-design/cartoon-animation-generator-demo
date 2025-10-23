const express = require('express');
const path = require('path');
const app = express();

// Serve frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Simple API to rotate limbs dynamically
app.get('/api/pose', (req, res) => {
    res.json({
        head: 15,
        leftArm: -30,
        rightArm: 30,
        leftLeg: 10,
        rightLeg: -10
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
