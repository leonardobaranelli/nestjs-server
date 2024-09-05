import { Controller, Get } from '@nestjs/common';
import { DashboardModel } from './dashboard.model';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardModel: DashboardModel) {}

  @Get()
  getDashboardMessage(): string {
    return this.dashboardModel.getDashboardMessage();
  }
}
