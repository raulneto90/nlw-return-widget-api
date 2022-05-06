import './email';
import { container } from 'tsyringe';

import { IFeedbacksRepository } from '@modules/feedbacks/repositories/IFeedbacksRepository';
import { PrismaFeedbacksRepository } from '@modules/feedbacks/repositories/prisma/PrismaFeedbacksRepository';

container.registerSingleton<IFeedbacksRepository>(
  'FeedbacksRepository',
  PrismaFeedbacksRepository,
);
