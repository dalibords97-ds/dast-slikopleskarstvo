// Vercel Serverless Function for DAST quote form via Resend API

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const { name, phone, service, area, location, notes } = req.body || {};

    if (!name || !phone) {
      res.status(400).json({ error: 'Name and phone are required.' });
      return;
    }

    const emailBody = {
      from: 'DAST <onboarding@resend.dev>',
      to: ['dalibords97@gmail.com'],
      subject: `Nova zahteva za ponudbo – ${service || 'Slikopleskarstvo'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #18181B; color: #FFFFFF; border-radius: 12px; overflow: hidden; border: 1px solid #27272A;">
          <div style="background-color: #D4AF37; padding: 20px 24px; text-align: center;">
            <h1 style="margin: 0; color: #0A0A0A; font-size: 22px; font-weight: 800; letter-spacing: 2px;">DAST</h1>
            <p style="margin: 4px 0 0 0; color: #0A0A0A; font-size: 13px; font-weight: 600;">Novo povpraševanje s spletne strani</p>
          </div>
          <div style="padding: 24px;">
            <p><strong>Ime:</strong> ${name || '/'}</p>
            <p><strong>Telefon:</strong> ${phone || '/'}</p>
            <p><strong>Storitev:</strong> ${service || '/'}</p>
            <p><strong>Kvadratura:</strong> ${area ? `${area} m²` : '/'}</p>
            <p><strong>Lokacija:</strong> ${location || '/'}</p>
            <p><strong>Opombe:</strong> ${notes || '/'}</p>
          </div>
        </div>
      `,
    };

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'Email service is not configured.' });
      return;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });

    const data = await response.json();
    if (!response.ok) {
      res.status(500).json({ error: data });
      return;
    }

    res.status(200).json({ success: true, data });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Internal Server Error' });
  }
}
