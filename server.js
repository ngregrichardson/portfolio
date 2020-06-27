require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const PORT = process.env.PORT;

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, "public")));
server.use(express.static(path.join(__dirname, "client/build")));

server.get("/resume*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build", "resume.pdf"))
);

server.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
);

server.post("/submit", (req, res) => {
  let { name, email, contactReason, message } = req.body;
  let transporter = nodemailer.createTransport({
    host: "smtp.ionos.com",
    port: 587,
    secure: false,
    auth: {
      user: "contact@nrdesign.xyz",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  transporter
    .sendMail({
      from: "contact@nrdesign.xyz",
      to: "contact@nrdesign.xyz",
      subject: `${name} contacted you on nrdesign.xyz`,
      text: "",
      html: `<div style="width: 90%; margin: 0 auto; background-color: black; text-align: center; color: white; border-radius: 3px;">
      <h1>Contact from nrdesign.xyz</h1>
      </div>
      <table style="width: 100%; padding-left: 5%;">
      <tbody>
      <tr>
      <td style="text-align: left;">
      <h3>Name: ${name}</h3>
      </td>
      </tr>
      <tr>
      <td style="text-align: left;">
      <h3>Email: ${email}</h3>
      </td>
      </tr>
      <tr>
      <td style="text-align: left;">
      <h3>Reason: ${contactReason}</h3>
      </td>
      </tr>
      </tbody>
      </table>
      <table style="width: 100%; padding-left: 5%;">
      <tbody>
      <tr>
      <td style="text-align: left;">
      <h3>Message:</h3>
      <p style="width: 40%;">${message}</p>
      </td>
      </tr>
      </tbody>
      </table>`,
    })
    .then((info) =>
      res.json({ status: 200, message: "Thanks for your message!" })
    )
    .catch((err) => {
      console.log(err);
      res.json({
        status: 500,
        message:
          "There was a problem sending your email. Please contact me at contact@nrdesign.xyz and I'll get back to you!",
      });
    });
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
