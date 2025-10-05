import type { IWorker, JobnikSDK } from '@map-colonies/jobnik-sdk';
import type { DependencyContainer, FactoryFunction } from 'tsyringe';
import { SERVICES } from './common/constants';
import { LogisticsManager } from './logistics/manager';
import { LogisticsSDK } from './logistics/types';

export const workerBuilder: FactoryFunction<IWorker> = (container: DependencyContainer) => {
  const sdk = container.resolve<LogisticsSDK>(SERVICES.JOBNIK_SDK);
  const logisticsManager = container.resolve(LogisticsManager);
  const worker = sdk.createWorker(logisticsManager.handlePickupTask.bind(logisticsManager), 'pickup');
  return worker;
};
