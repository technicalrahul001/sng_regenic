const nodemailer = require('nodemailer');

export async function POST(request) {
  try {
    const { name, email, organization, projectDetails } = await request.json();

    // Validate required fields
    if (!name || !email || !projectDetails) {
      return Response.json(
        { error: 'Name, email, and project details are required' },
        { status: 400 }
      );
    }

    // Check if environment variables are properly set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error('Missing environment variables:', {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_APP_PASSWORD: !!process.env.EMAIL_APP_PASSWORD
      });
      return Response.json(
        { error: 'Email configuration is missing. Please check environment variables.' },
        { status: 500 }
      );
    }

    // Create transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    // Test the connection first
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return Response.json(
        { error: 'Email server connection failed. Please check email credentials.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'dhariwalr01@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f0f9f7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${organization ? `<p><strong>Organization:</strong> ${organization}</p>` : ''}
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">Project Details</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${projectDetails}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
            <p style="color: #6b7280; font-size: 14px;">
              This message was sent from the Health Research website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${organization ? `Organization: ${organization}` : ''}

Project Details:
${projectDetails}

---
This message was sent from the Health Research website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to dhariwalr01@gmail.com');

    return Response.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error.message);
    console.error('Error code:', error.code);
    console.error('Full error:', error);
    
    // Return more specific error message
    let errorMessage = 'Failed to send email. Please try again later.';
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Gmail app password.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Unable to connect to email server. Please check your internet connection.';
    }
    
    return Response.json(
      { 
        error: errorMessage,
        debug: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
