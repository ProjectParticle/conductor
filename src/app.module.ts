/**
 * Core module
 */

import { Module } from '@nestjs/common';
import { CommunicationModule } from './communication/communication.module';
import { WorkflowStateModule } from './workflow-state/workflow-state.module';
import { WorkflowStorageModule } from './workflow-storage/workflow-storage.module';
import { LoggerModule } from './logger/logger.module';
import { HealthModule } from './health/health.module';
import { ConfigModule } from './config/config.module';

@Module({
    imports: [CommunicationModule, WorkflowStateModule, WorkflowStorageModule, LoggerModule, HealthModule, ConfigModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
