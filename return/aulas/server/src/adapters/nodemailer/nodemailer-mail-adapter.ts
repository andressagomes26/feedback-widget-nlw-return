import nodemailer from 'nodemailer'; 
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0369ef13f201fa",
      pass: "faa7ac9e5f0650"
    }
});

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com',
            to: 'Andressa <andressagomesm26@gmail.com>',
            subject,
            html: body
        })
    }
}