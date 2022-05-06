import { Router } from 'express';

import { SubmitFeedbackController } from '@modules/feedbacks/useCases/submitFeedback/SubmitFeedbackController';

const feedbacksRouter = Router();

const submitFeedbackController = new SubmitFeedbackController();

feedbacksRouter.post('/', submitFeedbackController.handle);

export { feedbacksRouter };
