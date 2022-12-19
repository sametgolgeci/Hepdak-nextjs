const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {

  const body = JSON.parse(req.body);
  console.log('body',body);

  const message = `
    Ad Soyad: ${body.name}\r\n
    Email: ${body.email}\r\n
    Mesaj: ${body.message}
  `;

  mail.send({
    to: 'samet.golgeci@gmail.com',
    from: 'admin@hepdak.org.tr',
    subject: 'Site üzerinden 1 yeni mesaj',
    text: message,
    html: message.replace(/rn/g, '<br>'),
  }).then(() => {
    res.status(200).json({ status: 'Ok' });
  });
}