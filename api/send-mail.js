const nodemailer = require("nodemailer");

module.exports = (req, res) => {

     const {
       query: { name,surname, email },
     } = req;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dazn@jadexconsulting.com",
      pass: "U3A5yk2zMyu8ZS",
    },
  });

  const mailOptions = {
    from: "dazn@jadexconsulting.com",
    to: "wanyaka1@gmail.com",
    subject: `NFT`,
    text: `${name} ${surname} ${email}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.json({
        body: error,
      });
    } else {
      res.json({
        body: info.response,
      });
    }
  });
};
