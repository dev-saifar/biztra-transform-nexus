const express = require('express');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  
  // Save submission to a file (append submission)
  const submission = { name, email, message, submittedAt: new Date().toISOString() };
  const filePath = path.join(__dirname, 'data', 'contactFormSubmissions.json');

  // Ensure directory exists
  if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
  }

  let submissions = [];
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath);
    submissions = JSON.parse(data);
  }
  submissions.push(submission);
  fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2));
  
  // Set up nodemailer transporter (configure with your credentials)
  const transporter = nodemailer.createTransport({
    host: 'biztrasolutions.com', // Replace with your SMTP host
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'info@biztrasolutions.com', // Replace with your SMTP username
      pass: 'info@biztra'  // Replace with your SMTP password
    }
  });
  
  // Email options
  const mailOptions = {
    from: '"Biztra Contact Form" <no-reply@biztra.com>', // sender address
    to: 'info@biztrasolutions.com', // list of receivers
    subject: 'New Contact Form Submission',
    text: `You received a new message from ${name} (${email}):\n\n${message}`
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Submission successful.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Submission saved but failed to send email.' });
  }
});

// Serve your static files (if needed)
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});