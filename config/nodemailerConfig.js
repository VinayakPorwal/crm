const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "fookreywebs@gmail.com",
    pass: "kigwzlsogswlleca",
  },
});

module.exports = mailer;
