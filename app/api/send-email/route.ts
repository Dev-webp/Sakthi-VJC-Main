import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const {
    name,
    email,
    phone,
    age,
    experience,
    qualification,
    country,
    message,
    landingPage, // ✅ capture this from frontend
  } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'vjcbangalore@gmail.com',
      subject: `New Contact Form Submission from ${landingPage || 'Unknown Page'}`, // ✅ dynamic subject
      text: `
        👤 Name: ${name}
        📧 Email: ${email}
        📞 Phone: ${phone}
        🎂 Age: ${age}
        💼 Experience: ${experience}
        🎓 Qualification: ${qualification}
        🌍 Country: ${country}
        📝 Message: ${message}
        🔗 Submitted From: ${landingPage || 'Not Provided'}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error sending email:', error.message);
      return NextResponse.json(
        { message: 'Error sending email', error: error.message },
        { status: 500 }
      );
    }

    console.error('Unknown error occurred while sending email');
    return NextResponse.json(
      { message: 'Unknown error occurred', error: 'Unknown error' },
      { status: 500 }
    );
  }
}
