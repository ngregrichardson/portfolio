require("dotenv").config();
const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const nodemailer = require("nodemailer");

app.use(favicon(__dirname + "/client/build/favicon.png"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/submit", async (req, res) => {
  let { name, email, reason, message } = req.body;
  let transporter = nodemailer.createTransport({
    host: "smtp.ionos.com",
    port: 587,
    secure: false,
    auth: {
      user: "contact@nrdesign.xyz",
      pass: process.env.EMAIL_PASSWORD
    }
  });

  transporter
    .sendMail({
      from: "contact@nrdesign.xyz",
      to: "contact@nrdesign.xyz",
      subject: `${name} contacted you on NRDesign`,
      text: "",
      html: `<div style="width: 90%; margin: 0 auto; background-color: black; text-align: center; color: white; border-radius: 3px;">
<h1>Contact from NRDesign</h1>
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
<h3>Reason: ${reason}</h3>
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
</table>`
    })
    .then(info => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
