import { IMailAdapter } from 'adapters/IMailAdapter';
import { NodemailerMailAdapter } from 'adapters/nodemailer/NodemailerMailAdapter';
import { container } from 'tsyringe';

container.registerSingleton<IMailAdapter>('MailAdapter', NodemailerMailAdapter);
