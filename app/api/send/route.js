import { EmailTemplate } from '../../..//components/email-template.jsx';
import { EmailTemplate2 } from '../../..//components/email-template.jsx';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const json = await req.json();
    const { name, email, message } = json;
    try {
        const data = await resend.emails.send({
            from: `${name} <onboarding@resend.dev>`,
            to: 'thomasfeeney117@gmail.com',
            reply_to: `${email}`,
            subject: `New message from ${name}`,
            react: EmailTemplate({ messageData: message, name: name, email: email }),
        })
        const resData = await resend.emails.send(
        {
            from: `Thomas Feeney <onboarding@resend.dev>`,
            to: `${email}`,
            subject: `Reply from Thomas`,
            react: EmailTemplate2({ name: name}),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: error.message });
    }
}
