import { Router } from 'express';

import { feedbacksRouter } from './feedbacks.routes';

const router = Router();

router.use('/feedbacks', feedbacksRouter);

export { router };
