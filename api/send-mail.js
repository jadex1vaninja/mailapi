const nodemailer = require("nodemailer");

module.exports = (req, res) => {
    const from = "dazn@jadexconsulting.com";
    const pass = process.env.pass;
    const to = "daznboxing@jadexconsulting.com";

    console.log("test")
     const {
       query: { name,surname, email,receiveMessages },
     } = req;

     if(!email) return res.json({
       error: "Email is required",
     });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: from,
      pass: pass,
    },
  });

  const mailOptions = {
    from: from,
    to: to,
    subject: `NFT`,
    text: `${name} ${surname} ${email}, Subscribe to newsletter: ${receiveMessages} ? 'YES': NO`,
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
