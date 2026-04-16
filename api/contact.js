import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, company, message } = req.body

  // Basic validation
  if (!name || !email || !company || !message) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Keen AI Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${name} (${company})`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        `Business: ${company}`,
        ``,
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <div style="font-family: monospace; max-width: 600px;">
          <h2 style="color: #BFFF00; background: #0a0a0a; padding: 16px;">New enquiry from ${name}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; color: #999; width: 100px;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; color: #999;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; color: #999;">Phone</td><td style="padding: 8px;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px; color: #999;">Business</td><td style="padding: 8px;">${company}</td></tr>
          </table>
          <div style="padding: 16px; margin-top: 16px; background: #f5f5f5; border-left: 3px solid #BFFF00;">
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Email send failed:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
