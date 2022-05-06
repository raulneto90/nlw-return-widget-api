import { IMailAdapter } from 'adapters/IMailAdapter';
import { inject, injectable } from 'tsyringe';

import { IFeedbacksRepository } from '@modules/feedbacks/repositories/IFeedbacksRepository';

import { ISubmitFeedbackDTO } from './dtos/ISubmitFeedbackDTO';

@injectable()
export class SubmitFeedbackUseCase {
  constructor(
    @inject('FeedbacksRepository')
    private readonly feedbacksRepository: IFeedbacksRepository,

    @inject('MailAdapter')
    private readonly mailAdapter: IMailAdapter,
  ) {}

  async execute(data: ISubmitFeedbackDTO): Promise<void> {
    await this.feedbacksRepository.create(data);
    await this.mailAdapter.sendMail({
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111">',
        `<p>Tipo do feedback: ${data.type} </p>`,
        `<p>Comentário: ${data.comment}`,
        '</div>',
      ].join('\n'),
      subject: 'Novo feedback',
    });
  }
}
