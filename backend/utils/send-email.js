const nodemailer = require('nodemailer');
const HttpError=require('../utils/http-error')
const { SMTPServer } = require('smtp-server');
module.exports=async(subject=null,receiverEmail,text=null)=>{

  const SMTPServerInstance = new SMTPServer({
    logger: true,
    debug: true,
    authOptional: true
  })
  
  SMTPServerInstance.listen(() => {

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    logger: true,
     debug: true,
    secureConnection: false,
    auth: {
      user: process.env.SMTP_USERNAME, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
    tls:{
      rejectUnAuthorized:true
  }
   
  });


 

  // send mail with defined transport object
   transporter.sendMail({
    from: receiverEmail,
    to: 'vendorfoulon@gmail.com', 
    subject: subject, // Subject line
    text:'Thank you for contacting us, we will contact you in a short time',
    html:`<!doctype html>
    <html lang=zxx>
    <head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>activate</title>
    
    <link href="//fonts.googleapis.com/css?family=Playfair+Display:400,400i,700&display=swap" rel=stylesheet>
    <link href="//fonts.googleapis.com/css?family=Montserrat:300,300i,400,600,700,800&display=swap" rel=stylesheet>
    </head>
    <body>
    <section class=w3l-formshny-page>
    <div class=formshny-page-content>
    <div class=contaciner>
    <div class=forms-17-top>
    <div class=forms-17-form>
    <div class=form-17-tp>
    <h6>${text}</h6>
   
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </body>
    </html>`, // html body
  }).then((info) => {
    console.log('Email successfully sent!', info);
  })
  .catch((err) => {
    console.log('Error when sending an email:', err);
  })
  .finally(() => {
    SMTPServerInstance.close();
  });
  // try {
  //   transporter.verify((err, success) => {
  //     if (err){
  //       const er=new HttpError(err.message,402)
  //       return er 
  //     } 
  // });
    
  // } catch (error) {
  //   const err=new HttpError(error.message,402)
  //   return err
  // }

})
}

