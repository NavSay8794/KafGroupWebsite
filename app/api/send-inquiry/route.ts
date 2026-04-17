import { Resend } from 'resend';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, interest } = await request.json();

    // Validate form data
    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!resend) {
      console.warn('RESEND_API_KEY not configured. Email will not be sent.');
      // For now, just return success but don't actually send
      // In production, you should configure the RESEND_API_KEY environment variable
      return Response.json(
        { success: true, message: 'Inquiry received (email service not configured)' },
        { status: 200 }
      );
    }

    // Send email to KAF Groups
    const result = await resend.emails.send({
      from: 'inquiries@kafgroups.com',
      to: 'kafgroups21@gmail.com',
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested in:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      replyTo: email,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: 'Inquiry sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending inquiry:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
