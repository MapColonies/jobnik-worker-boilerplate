import type { Task, TaskHandler, TaskHandlerContext } from '@map-colonies/jobnik-sdk';
import { injectable } from 'tsyringe';
import type { LogisticJobTypes, LogisticStageTypes } from './types';

interface ILogisticsManager {
  handlePickupTask: TaskHandler<LogisticStageTypes['pickup']['task'], LogisticJobTypes, LogisticStageTypes>;
}

@injectable()
export class LogisticsManager implements ILogisticsManager {
  public async handlePickupTask(
    task: Task<LogisticStageTypes['pickup']['task']>,
    context: TaskHandlerContext<LogisticJobTypes, LogisticStageTypes>
  ): Promise<void> {
    context.
  }
}
