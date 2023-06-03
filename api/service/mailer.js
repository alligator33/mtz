const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const schema = require("../validation/contact.validator");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

router.post("/", (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
      key: error.details[0].context.key,
    });
  }
  const htmlOutput = `
       <ul>      
       <li>Name:${value.name}</li>
       <li>Mobile:${value.mobile}</li>
       <li>Email:${value.email}</li>
       <li>Username:${value.username}</li>
        <li>Trader Name:${value.traderName}</li> 
       <li>Member:${value.member}</li>
       <li>Subject:${value.subject}</li>
       <li>Questions:${value.message}</li>
       <ul>    
        `;

  const textOutput = `
        Email:${value.email} \n 
        <li>Username:${value.username}</li>
        <li>Trader Name:${value.traderName}</li>
        Member:${value.member}\n
        Subject:${value.purpose}\n
        Questions:${value.questions}\n               
        `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: process.env.EMAIL_ADDRESS, // sender address
    to: process.env.EMAIL_ADDRESS, // list of receivers
    subject: `${value.subject}`,
    text: textOutput, // plain text body
    html: htmlOutput, // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(400).send({
        error:
          "Your Message failed to deliver, Please try again sometime later",
        status: true,
        sent: false,
      });
    }

    res.send({
      message: "You email was delivered, we will be in touch with you shortly",
      status: true,
      sent: true,
    });
    return console.log("Email sent Successfully" + info.messageId);
  });
});

module.exports = router;
