import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Mesaj iletildi" });
  }

  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Hepdak <info@hepdak.org.tr>",
      to: "info@hepdak.org.tr",
      subject: "Yeni İletişim Formu Mesajı",
      html: `
        <h3>Yeni Mesaj</h3>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mesaj:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false });
  }
}
