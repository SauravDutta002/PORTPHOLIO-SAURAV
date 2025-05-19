// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'hotmail', 'yahoo', etc.
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD, // Use App Password if using Gmail with 2FA
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `Portfolio Contact: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    // res.status(200).json({ message: 'Email sent successfully.' });
    res.status(200).json({ success: true, message: 'Email sent successfully.' });

    console.log("sent")
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: 'Email failed to send.' });
    res.status(500).json({ success: false, message: 'Email failed to send.' });

  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
