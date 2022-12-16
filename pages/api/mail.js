const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {

  const body = JSON.parse(req.body);
  console.log(body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  mail.send({
    to: 'info@hepdak.org.tr',
    from: 'admin@hepdak.org.tr',
    subject: 'Site üzerinden 1 yeni mesaj',
    text: message,
    html: message.replace(/rn/g, '<br>'),
  }).then(() => {
    res.status(200).json({ status: 'Ok' });
  });
}