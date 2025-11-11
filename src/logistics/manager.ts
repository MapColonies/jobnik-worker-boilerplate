import type { Task, TaskHandlerContext } from '@map-colonies/jobnik-sdk';
import { injectable } from 'tsyringe';
import type { LogisticJobTypes, LogisticStageTypes } from './types';

async function pickupPackage(): Promise<void> {
  return Promise.resolve();
}

@injectable()
export class LogisticsManager {
  public async handleDeliveryTask(
    task: Task<LogisticStageTypes['delivery']['task']>,
    context: TaskHandlerContext<LogisticJobTypes, LogisticStageTypes, 'hazmatTransport', 'delivery'>
  ): Promise<void> {
    context.logger.info('Handling pickup task for quantity:', task.data.quantity);
    const casualtyCount = context.job.userMetadata?.casualtyCount ?? 0;
    if (casualtyCount > task.data.quantity) {
      throw new Error('Casualty count exceeds quantity to be picked up');
    }

    await pickupPackage();

    await context.updateStageUserMetadata({ signaturedBy: 'John Doe' });
  }
}
