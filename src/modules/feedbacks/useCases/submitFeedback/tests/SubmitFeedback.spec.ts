import { SubmitFeedbackUseCase } from '../SubmitFeedbackUseCase';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  {
    create: createFeedbackSpy,
  },
  { sendMail: sendMailSpy },
);

describe('SubmitFeedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'data:image/png;base64, khjasdkjah4jahjk4h',
      }),
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback with wrong screenshot type', async () => {
    await expect(
      submitFeedbackUseCase.execute({
        type: 'BUG',
        comment: 'Example comment',
        screenshot: 'teste.jpg',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
