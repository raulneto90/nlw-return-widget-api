import { prismaClient } from '@config/prisma';

import { ICreateFeedbackRepositoryDTO } from '../../dtos/ICreateFeedbackRepository';
import { IFeedbacksRepository } from '../IFeedbacksRepository';

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
  async create(data: ICreateFeedbackRepositoryDTO): Promise<void> {
    await prismaClient.feedback.create({ data });
  }
}
