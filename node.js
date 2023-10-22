const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'khushi4876.be22@chitkara.edu.in',
    auth: {
        user: 'khushi',
        pass: 'Straightnerr1234',
    },
});

app.post('/send-email', (req, res) => {
    // Implement email sending functionality here
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
