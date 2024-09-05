import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [CompanyModule, DashboardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
