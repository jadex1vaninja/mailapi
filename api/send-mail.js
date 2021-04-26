const nodemailer = require("nodemailer");

module.exports = (req, res) => {
    const from = "dazn@jadexconsulting.com";
    const pass = process.env.pass;
    const to = ["daznboxing@jadexconsulting.com", "competitions@dazn.com"];

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
  const text = !receiveMessages === "true" ?  "YES": "NO"
  const mailOptions = {
    from: from,
    to: to,
    subject: `DAZN NFT - Canelo VS Saunders`,
    text: `${name}, ${surname}, ${email}, ${text}`,
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
