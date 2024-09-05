import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { CompanyModel } from './company.model';

@Module({
  controllers: [CompanyController],
  providers: [CompanyModel],
})
export class CompanyModule {}
