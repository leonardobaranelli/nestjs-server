import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardModel {
  getDashboardMessage(): string {
    return 'Hi, this is the dashboard module';
  }
}
