const express = require('express');
const QRCode = require('qrcode');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const biodata = {
    Name: "Niranjan",
    Age: 22,
    Occupation: "Student",
    Batch: "E35"
};

app.get('/biodata', (req, res) => {
    res.json(biodata);
});

app.get('/generate-qrcode', async (req, res) => {
    try {
        const qrCodeData = await QRCode.toDataURL(JSON.stringify(biodata));
        res.json({ qrCodeData });
    } catch (err) {
        res.status(500).send('Error generating QR code');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
