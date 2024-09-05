import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardModel } from './dashboard.model';

@Module({
  controllers: [DashboardController],
  providers: [DashboardModel],
})
export class DashboardModule {}
