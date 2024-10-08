import { EmailTemplate } from "@/app/EmailTemplate/EmailTemplate";
import { render } from "@react-email/components";
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, previewText }: { name: string; email: string; previewText: string } = await req.json();
    const emailHTML = await render(<EmailTemplate name={name} email={email} previewText={previewText} />);
    const info = await transporter.sendMail({
      from: `${email}`, // sender address
      to: ["pedrosilva354@gmail.com"], // list of receivers
      subject: "Mesagem do portifolio", // Subject line
      html: emailHTML, 
    });
    console.log("Message sent: %s", info.messageId);
    // Return a success response
    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    
    // Return an error response
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';