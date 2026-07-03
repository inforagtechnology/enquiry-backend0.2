// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// module.exports = transporter;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: 587, 
  secure: false, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Add this to make sure Render accepts the Gmail TLS certificate safely
  tls: {
    rejectUnauthorized: false
  }
});
// Verify the transporter connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error("❌ Nodemailer configuration error:", error);
  } else {
    console.log("✅ Server is ready to take our messages");
  }
});


module.exports = transporter;



