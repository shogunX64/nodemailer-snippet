const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your email address',
        pass: 'email password'
    }
});

let mailOptions = {
    from: 'your email address',
    to: 'whatever@emaill.address',
    subject: 'sending email using Node.js',
    html: '<h1>Welcome to quizz app</h1><p>This is a test email with HTML markup</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    } else {
        console.log(`Email sent: ${info.response}` )
    }
});