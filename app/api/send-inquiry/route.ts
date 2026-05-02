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
    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return Response.json(
        { error: 'Email service not configured on server' },
        { status: 500 }
      );
    }

    if (!resend) {
      console.error('Failed to initialize Resend client');
      return Response.json(
        { error: 'Email service initialization failed' },
        { status: 500 }
      );
    }

    // Send email to KAF Groups (use noreply@resend.dev as fallback sender)
    const result = await resend.emails.send({
      from: 'noreply@resend.dev',
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
        { error: `Failed to send email: ${result.error.message}` },
        { status: 500 }
      );
    }

    return Response.json(
      { success: true, message: 'Inquiry sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending inquiry:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return Response.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
