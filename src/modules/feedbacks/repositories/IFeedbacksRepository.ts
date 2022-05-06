import { ICreateFeedbackRepositoryDTO } from '../dtos/ICreateFeedbackRepository';

export interface IFeedbacksRepository {
  create(data: ICreateFeedbackRepositoryDTO): Promise<void>;
}
