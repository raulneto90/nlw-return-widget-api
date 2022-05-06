import { IMailAdapter, ISendMailData } from 'adapters/IMailAdapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '57cdaee3ada8b2',
    pass: '7573a4bb849d61',
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: ISendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com.br>',
      to: 'Raul Neto <raulneto90@gmail.com>',
      subject,
      html: body,
    });
  }
}
